import * as React from "react";
import type { SVGProps } from "react";

interface GolfHoleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const GolfHoleIcon = (props: GolfHoleIconProps) => {
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
        <path d="M8.49123 16.9949C5.8476 17.3924 4.00012 18.3679 4.00012 19.4242C4.00012 20.8468 7.35134 22.0001 11.4853 22.0001C15.6192 22.0001 18.9705 20.8468 18.9705 19.4242C18.9705 18.3026 16.8876 17.3484 13.9804 16.9949" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.9802 19.0279C11.063 11.8537 10.7826 5.1379 11.1511 2.88854C11.4308 2.09171 11.9222 1.29472 15.1486 3.06315L17.3293 4.13174C18.6711 4.78928 20.5387 5.83761 19.7703 7.1192C19.4206 7.70244 18.6245 8.35403 17.0701 9.01647L10.9782 11.9837" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default GolfHoleIcon;
