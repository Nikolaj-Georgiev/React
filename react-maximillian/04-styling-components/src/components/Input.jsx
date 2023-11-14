export default function Input({ label, invalid, ...props }) {
  let labelClasses = 'block mb-2 text-xs font-bold tracking-wide uppercase';
  let inputClasses = 'w-full px-3 py-2 leading-tight border rounded shadow';

  labelClasses = invalid
    ? (labelClasses += ' text-red-400')
    : (labelClasses += ' text-stone-300');

  inputClasses = invalid
    ? (inputClasses += ' text-red-500 bg-red-100 border-red-300')
    : (inputClasses += ' text-gray-700 bg-stone-300');
  return (
    <p>
      <label className={labelClasses}>{label}</label>
      <input
        className={inputClasses}
        {...props}
      />
    </p>
  );
}

{
  /* <label className="block mb-2 text-xs font-bold tracking-wide uppercase text-stone-300">{label}</label>
      <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow bg-stone-300" {...props} /> */
}
