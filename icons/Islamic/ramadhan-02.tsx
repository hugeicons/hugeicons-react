import * as React from "react";
import type { SVGProps } from "react";

interface Ramadhan02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Ramadhan02Icon = (props: Ramadhan02IconProps) => {
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
        <path d="M6.07186 15C-0.34574 7 10.0123 5 12.0001 2C13.9875 5 24.3473 7 17.9267 15V18C17.9267 19.8856 17.9267 20.8284 17.3481 21.4142C16.7695 22 15.8382 22 13.9756 22H10.0236C8.16141 22 7.2303 22 6.65169 21.4144C6.07308 20.8287 6.07289 19.8861 6.07249 18.0009L6.07186 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 19L11.2988 18.7828C12.9134 17.6094 13.7206 17.0227 14.6386 17.0008C14.7479 16.9982 14.8573 17.0017 14.9662 17.0112C15.8444 17.0877 16.5 18 17.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6.5 19C8 18 8.66888 17.0254 9.6805 17.0009C9.80096 16.998 9.9215 17.0019 10.0415 17.0125C10.6754 17.0688 11.2447 17.3721 12 17.9447" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 12.4343C14.4347 13.3725 13.406 14 12.2308 14C10.4465 14 9 12.5535 9 10.7692C9 9.594 9.6275 8.56534 10.5657 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 9H14.009" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Ramadhan02Icon;
