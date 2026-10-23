export function FittingTypeToggle({
  value,
  onChange

}) {
  return (
    <div
      role="radiogroup"
      aria-label="Fitting preference"
      className="relative grid grid-cols-2 rounded-xl border-2 border-gray-200 bg-gray-50 p-1">

      {[
      { id: 'fitted', label: 'Fully fitted' },
      { id: 'mail-order', label: 'Mail order' }].
      map((option) =>
      <button
        key={option.id}
        type="button"
        role="radio"
        aria-checked={value === option.id}
        onClick={() => onChange(option.id)}
        className={`relative z-10 rounded-lg px-4 py-2.5 text-sm font-extrabold transition-colors ${
        value === option.id ? 'bg-brand-yellow text-brand-black shadow-sm' : 'text-gray-500 hover:text-brand-black'}`
        }>

          {option.label}
        </button>
      )}
    </div>);

}
