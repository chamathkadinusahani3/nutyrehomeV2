import { CheckIcon } from 'lucide-react';

const steps = ['Search', 'Select tyre', 'Select fitter', 'Checkout'];

export function SearchProgress({ current }) {
  return (
    <nav aria-label="Order progress" className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
      <ol className="flex items-center gap-2 overflow-x-auto sm:gap-3">
        {steps.map((label, index) => {
          const number = index + 1;
          const isDone = number < current;
          const isActive = number === current;
          return (
            <li key={label} className="flex shrink-0 items-center gap-2">
              <span
                aria-current={isActive ? 'step' : undefined}
                className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-[11px] font-extrabold sm:h-7 sm:w-7 ${
                isDone ?
                'bg-brand-black text-white' :
                isActive ?
                'bg-brand-yellow text-brand-black' :
                'bg-gray-100 text-gray-400'}`
                }>

                {isDone ? <CheckIcon size={13} /> : number}
              </span>
              <span
                className={`text-xs font-bold sm:text-sm ${isActive ? 'text-brand-black' : isDone ? 'text-gray-500' : 'text-gray-400'}`}>

                {label}
              </span>
              {number < steps.length && <span className="mx-1 h-px w-4 shrink-0 bg-gray-200 sm:w-8" />}
            </li>);

        })}
      </ol>
    </nav>);

}
