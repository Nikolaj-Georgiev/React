import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className='flex flex-col items-center mt-8 mb-8 md:mb-16 justify-center'>
      <img
        className='object-contain mb-8 w-44 h-44'
        src={logo}
        alt='A canvas'
      />
      <h1 className='text-xl md:text-4xl tracking-widest text-amber-800 font-title font-semibold text-center uppercase m-0'>
        ReactArt
      </h1>
      <p className='text-stone-500 m-0 text-center'>
        A community of artists and art-lovers.
      </p>
    </header>
  );
}
