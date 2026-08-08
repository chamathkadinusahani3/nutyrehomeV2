import type { ScannedTyre, ScannedVehicle, TyreScanOutcome, TyreScanResult } from '../types/tyreScan';

/**
 * Smart Tyre Scan — image → vehicle/tyre recognition.
 *
 * There is no computer-vision or OCR backend connected to this project yet
 * (no backend, no .env, no image-recognition API integration exists anywhere
 * in the repo). A browser alone cannot reliably read tyre sidewall markings
 * or identify a vehicle from a photo, so this service intentionally returns
 * realistic SAMPLE data rather than pretending to analyze the image pixels.
 * Every result is flagged `isDemo: true` and the UI must present it as a
 * demo/sample, never as a verified reading — see ScanResultCard.tsx.
 *
 * To connect a real provider later:
 *   1. Add the endpoint + key as Vite env vars, e.g.
 *        VITE_TYRE_SCAN_API_URL
 *        VITE_TYRE_SCAN_API_KEY
 *   2. Replace the body of `scanImage` with a call that uploads `image` to
 *      that endpoint and maps its response into the `TyreScanResult` shape
 *      below (vehicle make/model, tyre width/profile/rim/loadIndex/
 *      speedRating/brand, confidencePercent).
 *   3. Keep the same return shape (`TyreScanOutcome`) so every component
 *      that calls this (TyreScanner.tsx) keeps working without changes —
 *      it already handles 'success' and 'error'.
 */

const SAMPLE_RESULTS: TyreScanResult[] = [
{
  vehicle: { make: 'BMW', model: '3 Series', generation: 'G20 (2019–present)' },
  tyre: { width: 205, profile: 55, construction: 'R', rim: 16, loadIndex: 91, speedRating: 'V', brand: 'Michelin', model: 'Primacy 4+', type: 'Summer' },
  confidencePercent: 96,
  isDemo: true
},
{
  vehicle: { make: 'Ford', model: 'Focus', generation: 'Mk4 (2018–present)' },
  tyre: { width: 215, profile: 50, construction: 'R', rim: 17, loadIndex: 95, speedRating: 'W', brand: 'Continental', model: 'PremiumContact 7', type: 'Summer' },
  confidencePercent: 93,
  isDemo: true
},
{
  vehicle: { make: 'Volkswagen', model: 'Golf', generation: 'Mk8 (2019–present)' },
  tyre: { width: 225, profile: 45, construction: 'R', rim: 17, loadIndex: 94, speedRating: 'V', brand: 'Goodyear', model: 'EfficientGrip Performance', type: 'Summer' },
  confidencePercent: 91,
  isDemo: true
}];


function pickSampleResult(): TyreScanResult {
  const index = Math.floor(Math.random() * SAMPLE_RESULTS.length);
  return SAMPLE_RESULTS[index];
}

async function wait(ms: number) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

export async function recognizeVehicle(_image: string | File | null): Promise<ScannedVehicle> {
  await wait(700);
  return pickSampleResult().vehicle;
}

export async function recognizeTyre(_image: string | File | null): Promise<ScannedTyre> {
  await wait(700);
  return pickSampleResult().tyre;
}

/**
 * Runs the full scan pipeline for a captured/uploaded image and returns a
 * demo result. `image` is accepted (a captured camera frame as a data URL,
 * or an uploaded File) so the call site already exercises the real capture
 * path — only the recognition step itself is mocked.
 */
export async function scanImage(_image: string | File | null): Promise<TyreScanOutcome> {
  try {
    await wait(600);
    const sample = pickSampleResult();
    return { status: 'success', result: sample };
  } catch {
    return { status: 'error', message: 'We couldn’t process that image. Please try again.' };
  }
}

export function getScanResult(): TyreScanResult {
  return pickSampleResult();
}
