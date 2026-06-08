"use client";

import { cn } from "@/utils/helpers/cn";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  children: React.ReactNode;
  onClose?: () => void;
  isOpen?: boolean;
  className?: string;
}

const Modal = ({
  children,
  onClose,
  isOpen = false,
  className = "",
}: ModalProps) => {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Mount modal and lock scroll
  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      setTimeout(() => setShow(true), 10); // Trigger animation
      document.body.style.overflow = "hidden";
    } else {
      setShow(false);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Unmount after animation
  useEffect(() => {
    if (!show && mounted) {
      const timer = setTimeout(() => setMounted(false), 300);
      return () => clearTimeout(timer);
    }
  }, [show, mounted]);

  // Close on outside click
  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose?.();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  if (!mounted) return null;

  return ReactDOM.createPortal(
    <div
      className={cn(
        `fixed inset-0 z-[999] flex items-center justify-center transition-opacity duration-300 ${
          show ? "bg-black/50 opacity-100" : "bg-black/0 opacity-0"
        }`,
      )}
    >
      <div
        ref={modalRef}
        className={cn(
          `relative w-full p-6 shadow-xl bg-white transform transition-all duration-300 ${className} ${
            show ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`,
        )}
      >
        <button onClick={onClose} className="absolute top-3 right-3 text-xl">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3602 19.7807L12.0002 13.4107L5.64021 19.7807L4.22021 18.3607L10.5902 12.0007L4.22021 5.6407L5.64021 4.2207L12.0002 10.5907L18.3602 4.2307L19.7702 5.6407L13.4102 12.0007L19.7702 18.3607L18.3602 19.7807Z"
              fill="white"
            />
          </svg>
        </button>

        <div>{children}</div>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
