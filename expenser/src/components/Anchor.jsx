/* eslint-disable react/prop-types */
import { useCallback, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Anchor(props) {
  const { id } = props;
  const ref = useRef(null);
  const location = useLocation();

  const handleHashChange = useCallback(() => {
    if (location.hash.substring(1) === id && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [id, location, ref]);

  useEffect(() => {
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [handleHashChange]);

  return (
    <div
      id={id}
      ref={ref}
    />
  );
}
