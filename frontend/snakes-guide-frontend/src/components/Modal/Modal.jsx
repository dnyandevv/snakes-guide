import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(
  function Modal(props, ref) {
    const dialogRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      if (isOpen) {
        dialogRef.current?.showModal();
        document.body.style.overflow = "hidden";
      }
    }, [isOpen]);

    const handleClose = () => {
      dialogRef.current?.close();
      setIsOpen(false);
      document.body.style.overflow = "auto";
    };

    useImperativeHandle(ref, () => ({
      open() {
        setIsOpen(true);
      },
      close() {
        handleClose();
      },
    }));

    if (!isOpen) return null;

    return createPortal(
      <dialog
        ref={dialogRef}
        onClose={handleClose}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-[2rem] shadow-2xl w-[95%] max-w-2xl h-[85vh] z-50 overflow-hidden flex flex-col p-0 border-none"
      >
        <div className="flex justify-between items-center p-4 border-b">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt veniam doloribus adipisci dolorum iste quo possimus eligendi cum unde corrupti fuga harum distinctio odit non cupiditate, ipsam aspernatur tempora itaque!
          </p>
        </div>
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </dialog>,
      document.getElementById("modal")
    );
  }
);

export default Modal;