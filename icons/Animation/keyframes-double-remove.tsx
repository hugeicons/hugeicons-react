import * as React from "react";
import type { SVGProps } from "react";

interface KeyframesDoubleRemoveIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const KeyframesDoubleRemoveIcon = (props: KeyframesDoubleRemoveIconProps) => {
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
        <path d="M14.002 4.5C14.3775 4.16667 14.6982 4 15.068 4C15.7661 4 16.2896 4.59409 17.3365 5.78228L19.9113 8.70448C21.3036 10.2847 21.9998 11.0747 21.9998 12C21.9998 12.9253 21.3036 13.7153 19.9113 15.2955L17.3365 18.2177C16.2896 19.4059 15.7661 20 15.068 20C14.6982 20 14.3775 19.8333 14.002 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 5.4398C7.86196 4.47993 8.35392 4 8.98862 4C9.69478 4 10.2243 4.59409 11.2832 5.78228L13.8875 8.70448C15.2959 10.2847 16 11.0747 16 12C16 12.9253 15.2959 13.7153 13.8876 15.2955L11.2832 18.2177C10.2243 19.4059 9.69478 20 8.98862 20C8.35392 20 7.86196 19.5201 7 18.5602" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 12H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default KeyframesDoubleRemoveIcon;
