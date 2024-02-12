import * as React from "react";
import type { SVGProps } from "react";

interface Raw01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Raw01Icon = (props: Raw01IconProps) => {
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
        <path d="M3.5 13V12.1963C3.5 9.22892 3.5 7.74523 3.96894 6.56024C4.72281 4.65521 6.31714 3.15255 8.33836 2.44201C9.59563 2.00003 11.1698 2.00003 14.3182 2.00003C16.1173 2.00003 17.0168 2.00003 17.7352 2.25259C18.8902 2.65861 19.8012 3.51728 20.232 4.60587C20.5 5.283 20.5 6.13082 20.5 7.82646V12.0142V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.5 12C3.5 10.1591 4.99238 8.66667 6.83333 8.66667C7.49912 8.66667 8.28404 8.78333 8.93137 8.60988C9.50652 8.45576 9.95576 8.00652 10.1099 7.43136C10.2833 6.78404 10.1667 5.99912 10.1667 5.33333C10.1667 3.49238 11.6591 2 13.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.1948 21.9995L12.6135 19.9996M9.12575 21.9995L10.7627 16.3678C10.8249 16.154 10.9312 16 11.1603 16C11.3894 16 11.4957 16.154 11.5578 16.3678L12.6135 19.9996M3.5 21.9995V19.5997M3.5 19.5997V17.1999C3.5 16.321 3.56253 16 4.31381 16H5.53453C6.20872 16 6.75525 16.8058 6.75525 17.7998C6.75525 18.7939 6.20872 19.5997 5.53453 19.5997M3.5 19.5997H5.53453M5.53453 19.5997L6.34834 21.9995M9.7135 19.9996H12.6135M20.5 16L20.0851 20.9984C20.0499 21.4224 20.0323 21.6344 19.9025 21.674C19.7728 21.7135 19.6399 21.5474 19.3741 21.2152L18.3143 19.8904C18.1702 19.7102 18.0981 19.6202 18.002 19.6202C17.9058 19.6202 17.8338 19.7102 17.6896 19.8904L16.6292 21.2159C16.3636 21.5479 16.2309 21.7139 16.1011 21.6744C15.9714 21.6348 15.9537 21.423 15.9182 20.9994L15.5 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Raw01Icon;
