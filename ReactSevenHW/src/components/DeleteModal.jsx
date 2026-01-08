import { useEffect, useRef } from "react";
import "./DeleteModal.scss";

const DeleteModal = ({ onClose, onConfirm }) => {
  const overlayRef = useRef(null);

  // Фокус + Escape
  useEffect(() => {
    overlayRef.current?.focus();

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div
      className="modal-overlay"
      ref={overlayRef}
      tabIndex={-1}
      onClick={onClose}
    >
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>
          Ви впевнені, що хочете <strong>ВИДАЛИТИ</strong> завдання?
        </h2>

        <div className="btn-wrapper">
          <button className="btn yes-btn" onClick={onConfirm}>
            Так
          </button>
          <button className="btn no-btn" onClick={onClose}>
            Ні
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;