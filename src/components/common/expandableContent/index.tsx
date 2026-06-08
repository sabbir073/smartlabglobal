"use client";
import { useRef, useState, useLayoutEffect } from "react";
import ButtonComponent from "../button";
import { cn } from "@/utils/helpers/cn";
import { Content } from "../typography";

export interface ExpandableContentProps {
  /** Collapsed height in pixels. Defaults to ~4 text lines (96 px). */
  collapsedHeight?: number;
  moreLabel?: string | React.ReactNode;
  lessLabel?: string | React.ReactNode;
  duration?: number;
  children: React.ReactNode;
  className?: string;
  buttonClassName?: string;
}

const DEFAULT_COLLAPSED_HEIGHT = 96; // ≈ 4 lines at 24 px line-height
const DEFAULT_DURATION = 500;

const MoreLabel = () => {
  return (
    <p className="flex gap-1">
      More <AddIcon />
    </p>
  );
};
const LessLabel = () => {
  return (
    <p className="flex gap-1">
      Less <MinusIcon />
    </p>
  );
};

export default function ExpandableContent({
  collapsedHeight = DEFAULT_COLLAPSED_HEIGHT,
  moreLabel = <MoreLabel />,
  lessLabel = <LessLabel />,
  duration = DEFAULT_DURATION,
  children,
  className,
  buttonClassName,
}: ExpandableContentProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [maxHeight, setMaxHeight] = useState<number | undefined>(50);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (containerRef.current) {
        const height = containerRef.current.scrollHeight;
        setMaxHeight(height);
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [children]);

  return (
    <div className={cn("flex flex-col", className)}>
      <Content
        ref={containerRef}
        style={{
          maxHeight: open ? maxHeight : collapsedHeight,
          transition: `max-height ${duration}ms ease-in-out`,
        }}
        className={cn("overflow-hidden")}
        aria-hidden={!open}
      >
        {children}
      </Content>

      {maxHeight && maxHeight > collapsedHeight && (
        <div className="mt-4">
          <ButtonComponent
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            className={cn(
              "p-0 transition-all duration-500 ease-in-out event-btn flex items-center gap-2 text-sm outline-none font-semibold text-[#414042] dark:text-[#F4F4F4] leading-[24px]",
              buttonClassName,
            )}
          >
            {open ? lessLabel || <LessLabel /> : moreLabel || <MoreLabel />}
          </ButtonComponent>
        </div>
      )}
    </div>
  );
}

const AddIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 12.998H13V17.998C13 18.2633 12.8946 18.5176 12.7071 18.7052C12.5196 18.8927 12.2652 18.998 12 18.998C11.7348 18.998 11.4804 18.8927 11.2929 18.7052C11.1054 18.5176 11 18.2633 11 17.998V12.998H6C5.73478 12.998 5.48043 12.8927 5.29289 12.7052C5.10536 12.5176 5 12.2633 5 11.998C5 11.7328 5.10536 11.4785 5.29289 11.2909C5.48043 11.1034 5.73478 10.998 6 10.998H11V5.99805C11 5.73283 11.1054 5.47848 11.2929 5.29094C11.4804 5.1034 11.7348 4.99805 12 4.99805C12.2652 4.99805 12.5196 5.1034 12.7071 5.29094C12.8946 5.47848 13 5.73283 13 5.99805V10.998H18C18.2652 10.998 18.5196 11.1034 18.7071 11.2909C18.8946 11.4785 19 11.7328 19 11.998C19 12.2633 18.8946 12.5176 18.7071 12.7052C18.5196 12.8927 18.2652 12.998 18 12.998Z"
        // fill="#414042"
        className="fill-[#414042] group-hover:fill-[#f7f7f7] dark:fill-[#f7f7f7] dark:group-hover:fill-[#414042]"
      />
    </svg>
  );
};

const MinusIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 12.998H6C5.73478 12.998 5.48043 12.8927 5.29289 12.7052C5.10536 12.5176 5 12.2633 5 11.998C5 11.7328 5.10536 11.4785 5.29289 11.2909C5.48043 11.1034 5.73478 10.998 6 10.998H18C18.2652 10.998 18.5196 11.1034 18.7071 11.2909C18.8946 11.4785 19 11.7328 19 11.998C19 12.2633 18.8946 12.5176 18.7071 12.7052C18.5196 12.8927 18.2652 12.998 18 12.998Z"
        className="fill-[#414042] group-hover:fill-[#f7f7f7] dark:fill-[#f7f7f7] dark:group-hover:fill-[#414042]"
      />
    </svg>
  );
};
