import * as React from "react";
import type { SVGProps } from "react";

interface CentralizedIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CentralizedIcon = (props: CentralizedIconProps) => {
  const animationName = props.animate ? 'spinAnimation' : '';

  return (
    <>
      <style>
        {`
          @keyframes ${animationName} {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        viewBox="0 0 24 24"
        width={props.size || 24}
        height={props.size || 24}
        fill={"none"}
        {...props}
        style={{
          ...props.style,
          animation: props.animate ? `${animationName} 2s linear infinite` : undefined,
          transform: `rotate(${props.rotate || 0}deg)`,
        }}
      >
        <path d="M12 7C9.23858 7 7 9.23857 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.7366 6.26337L21.5 2.5M17.7366 6.26337C17.297 5.82377 17.5833 4.02148 17.6966 3M17.7366 6.26337C18.1762 6.70297 19.9785 6.41666 21 6.30336" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.26337 17.7366L2.5 21.5M6.26337 17.7366C5.82377 17.297 4.02148 17.5833 3 17.6966M6.26337 17.7366C6.70297 18.1762 6.41666 19.9785 6.30336 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.7366 17.7366L21.5 21.5M17.7366 17.7366C18.1762 17.297 19.9785 17.5833 21 17.6966M17.7366 17.7366C17.297 18.1762 17.5833 19.9785 17.6966 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.26337 6.26337L2.5 2.5M6.26337 6.26337C6.70297 5.82377 6.41666 4.02148 6.30336 3M6.26337 6.26337C5.82377 6.70297 4.02148 6.41666 3 6.30336" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CentralizedIcon;
