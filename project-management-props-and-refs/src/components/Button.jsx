export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className='px-4 py-2 text-xs bg-stone-700 text-stone-400 md:text-base rounded-md hover:bg-stone-600 hover:text-stone-100'
    >
      {children}
    </button>
  );
}
