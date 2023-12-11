import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import useEscapeKey from '../../util/useEscapeKey.js';

export default function Modal({ children, open, onClose, className = '' }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        modal.close();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      modal.close();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);
  return createPortal(
    <dialog
      ref={dialog}
      className={`modal ${className}`}
    >
      {children}
    </dialog>,
    document.getElementById('modal')
  );
}
