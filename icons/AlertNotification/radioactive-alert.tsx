import * as React from "react";
import type { SVGProps } from "react";

interface RadioactiveAlertIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const RadioactiveAlertIcon = (props: RadioactiveAlertIconProps) => {
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
        <path d="M9 3C7.78555 3.91217 7 5.36445 7 7.0002C7 9.76151 9.23858 12 12 12C14.7614 12 17 9.76151 17 7.0002C17 5.36445 16.2144 3.91217 15 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M21 13C20.0878 11.7856 18.6355 11 16.9998 11C14.2385 11 12 13.2386 12 16C12 18.7614 14.2385 21 16.9998 21C18.6355 21 20.0878 20.2144 21 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 13C3.91221 11.7857 5.36426 11 7 11C9.76142 11 12 13.2386 12 16C12 18.7614 9.76142 21 7 21C5.3644 21 3.91223 20.2147 3 19.0005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default RadioactiveAlertIcon;
