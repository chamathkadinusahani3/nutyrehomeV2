type ScanOverlayProps = {
  active: boolean;
  label?: string;
};

const cornerBase = 'absolute h-8 w-8 border-brand-yellow motion-safe:animate-pulse sm:h-10 sm:w-10';

export function ScanOverlay({ active, label }: ScanOverlayProps) {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="absolute inset-6 sm:inset-10">
        <span className={`${cornerBase} left-0 top-0 rounded-tl-2xl border-l-4 border-t-4`} />
        <span className={`${cornerBase} right-0 top-0 rounded-tr-2xl border-r-4 border-t-4`} />
        <span className={`${cornerBase} bottom-0 left-0 rounded-bl-2xl border-b-4 border-l-4`} />
        <span className={`${cornerBase} bottom-0 right-0 rounded-br-2xl border-b-4 border-r-4`} />

        {active &&
        <div className="absolute inset-x-2 h-0.5 rounded-full bg-brand-yellow shadow-[0_0_18px_4px_rgba(249,200,14,0.65)] animate-scan-sweep" />
        }
      </div>

      {active &&
      <div className="absolute inset-6 rounded-2xl bg-brand-yellow/5 sm:inset-10" />
      }

      {label &&
      <div className="absolute inset-x-0 bottom-3 flex justify-center px-4 sm:bottom-5">
          <span className="rounded-full bg-brand-black/80 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white backdrop-blur">
            {label}
          </span>
        </div>
      }
    </div>);

}
