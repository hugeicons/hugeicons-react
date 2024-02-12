import * as React from "react";
import type { SVGProps } from "react";

interface Chip02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Chip02Icon = (props: Chip02IconProps) => {
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
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 12C11.1716 12 10.5 12.5596 10.5 13.25C10.5 13.9404 11.1716 14.5 12 14.5C12.8284 14.5 13.5 13.9404 13.5 13.25C13.5 12.5596 12.8284 12 12 12ZM12 12C12.8284 12 13.5 11.4404 13.5 10.75C13.5 10.0596 12.8284 9.5 12 9.5C11.1716 9.5 10.5 10.0596 10.5 10.75C10.5 11.4404 11.1716 12 12 12Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 2V6M12 18V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.9992 12L17.9992 12M6 12.0005L2 12.0005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Chip02Icon;
