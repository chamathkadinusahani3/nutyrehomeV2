import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRightIcon,
  CameraIcon,
  CameraOffIcon,
  ImageUpIcon,
  Loader2Icon,
  RotateCcwIcon,
  ScanLineIcon } from
'lucide-react';
import { scanImage } from '../../services/tyreScanner';
import { tyreSizeToSlug } from '../../types/vehicle';
import { SCAN_STAGES } from '../../types/tyreScan';
import { ScanOverlay } from './ScanOverlay';
import { ScanResultCard } from './ScanResultCard';

const instructions = [
'Tap "Open camera" and allow camera access',
'Point your camera at the tyre sidewall',
'Keep the tyre inside the scan frame',
'Hold steady for a few seconds while we scan'];

export function TyreScanner({ variant = 'full', onScanComplete, showLearnMore = true }) {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const fileInputRef = useRef(null);

  const [phase, setPhase] = useState('intro');
  const [stageIndex, setStageIndex] = useState(0);
  const [previewImage, setPreviewImage] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    return () => stopCamera();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function stopCamera() {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
  }

  async function startCamera() {
    if (!navigator.mediaDevices?.getUserMedia) {
      setPhase('camera-error');
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' }
      });
      streamRef.current = stream;
      setPhase('camera');
      requestAnimationFrame(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play().catch(() => undefined);
        }
      });
    } catch {
      setPhase('camera-error');
    }
  }

  function captureFrame() {
    const video = videoRef.current;
    if (!video || video.videoWidth === 0) return null;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d')?.drawImage(video, 0, 0);
    return canvas.toDataURL('image/jpeg', 0.85);
  }

  async function runScan(image) {
    stopCamera();
    setPhase('analyzing');
    setStageIndex(0);

    const stageTimer = window.setInterval(() => {
      setStageIndex((index) => Math.min(index + 1, SCAN_STAGES.length - 2));
    }, 750);

    const outcome = await scanImage(image);
    window.clearInterval(stageTimer);
    setStageIndex(SCAN_STAGES.length - 1);

    if (outcome.status === 'success') {
      window.setTimeout(() => {
        setResult(outcome.result);
        setPhase('result');
        onScanComplete?.(outcome.result);
      }, 350);
    } else {
      window.setTimeout(() => setPhase('scan-error'), 350);
    }
  }

  function handleCapture() {
    const frame = captureFrame();
    if (frame) setPreviewImage(frame);
    runScan(frame);
  }

  function handleFileChange(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    setPreviewImage(URL.createObjectURL(file));
    runScan(file);
  }

  function handleFindTyres() {
    if (!result) return;
    const params = new URLSearchParams({
      fitting: 'fitted',
      make: result.vehicle.make,
      model: result.vehicle.model,
      source: 'scan'
    });
    navigate(`/tyres/${tyreSizeToSlug(result.tyre)}?${params.toString()}`);
  }

  function reset() {
    stopCamera();
    setPhase('intro');
    setResult(null);
    setPreviewImage(null);
    setStageIndex(0);
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  const frameHeight = variant === 'compact' ? 'h-56 sm:h-64' : 'h-72 sm:h-80';

  return (
    <div className={variant === 'full' ? 'rounded-2xl border-2 border-dashed border-brand-light-gold/50 bg-brand-cream p-5 sm:p-6' : ''}>
      <AnimatePresence mode="wait">
        {phase === 'intro' &&
        <motion.div key="intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-yellow text-brand-black">
              <ScanLineIcon size={26} />
            </div>
            <ul className="mx-auto mt-4 max-w-sm space-y-1.5 text-left text-sm leading-6 text-gray-600">
              {instructions.map((step, index) =>
            <li key={step} className="flex gap-2">
                  <span className="font-mono font-extrabold text-brand-black">{index + 1}.</span>
                  {step}
                </li>
            )}
            </ul>

            <div className="mx-auto mt-5 flex max-w-xs flex-col gap-2.5">
              <button
              type="button"
              onClick={startCamera}
              className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-brand-black px-6 text-sm font-extrabold text-white transition hover:bg-brand-amber">

                <CameraIcon size={19} />
                Open camera
              </button>
              <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-6 text-sm font-bold text-gray-600 transition hover:border-brand-yellow hover:text-brand-black">

                <ImageUpIcon size={17} />
                Upload a photo instead
              </button>
              {showLearnMore &&
              <Link
                to="/smart-tyre-scan"
                className="mt-1 flex items-center justify-center gap-1.5 text-sm font-bold text-gray-500 transition hover:text-brand-black">

                  Learn more about Smart Tyre Scan
                  <ArrowRightIcon size={14} />
                </Link>
              }
            </div>
          </motion.div>
        }

        {phase === 'camera' &&
        <motion.div key="camera" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className={`relative overflow-hidden rounded-2xl bg-black ${frameHeight}`}>
              <video ref={videoRef} muted playsInline className="h-full w-full object-cover" />
              <ScanOverlay active={false} label="Point at the tyre sidewall" />
            </div>
            <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
              <button
              type="button"
              onClick={handleCapture}
              className="flex h-14 flex-1 items-center justify-center gap-2 rounded-xl bg-brand-black text-sm font-extrabold text-white transition hover:bg-brand-amber">

                <ScanLineIcon size={18} />
                Scan now
              </button>
              <button
              type="button"
              onClick={reset}
              className="flex h-14 items-center justify-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-5 text-sm font-bold text-gray-600 transition hover:border-brand-yellow">

                Cancel
              </button>
            </div>
          </motion.div>
        }

        {phase === 'camera-error' &&
        <motion.div key="camera-error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gray-200 text-gray-500">
              <CameraOffIcon size={24} />
            </div>
            <p className="mx-auto mt-4 max-w-xs text-sm leading-6 text-gray-600">
              Camera access isn't available on this device or was denied.
              You can upload a photo instead.
            </p>
            <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="mx-auto mt-5 flex h-14 w-full max-w-xs items-center justify-center gap-2 rounded-xl bg-brand-black px-6 text-sm font-extrabold text-white transition hover:bg-brand-amber">

              <ImageUpIcon size={18} />
              Upload a photo
            </button>
          </motion.div>
        }

        {phase === 'analyzing' &&
        <motion.div key="analyzing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className={`relative overflow-hidden rounded-2xl bg-black ${frameHeight}`}>
              {previewImage ?
            <img src={previewImage} alt="" className="h-full w-full object-cover opacity-80" /> :

            <div className="h-full w-full bg-gradient-to-br from-neutral-800 to-neutral-950" />
            }
              <ScanOverlay active label={SCAN_STAGES[stageIndex]?.label ?? 'Analyzing…'} />
            </div>
            <p role="status" className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-brand-black">
              <Loader2Icon size={17} className="animate-spin" />
              {SCAN_STAGES[stageIndex]?.label ?? 'Analyzing…'}
            </p>
          </motion.div>
        }

        {phase === 'result' && result &&
        <motion.div key="result" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ScanResultCard result={result} onFindTyres={handleFindTyres} onRescan={reset} />
          </motion.div>
        }

        {phase === 'scan-error' &&
        <motion.div key="scan-error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
            <p className="text-sm leading-6 text-gray-600">
              We couldn't process that image. Please try again.
            </p>
            <button
            type="button"
            onClick={reset}
            className="mx-auto mt-4 flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-black px-6 text-sm font-extrabold text-white transition hover:bg-brand-amber">

              <RotateCcwIcon size={15} />
              Try again
            </button>
          </motion.div>
        }
      </AnimatePresence>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={handleFileChange} />

    </div>);

}
