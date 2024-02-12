import * as React from "react";
import type { SVGProps } from "react";

interface Share04IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Share04Icon = (props: Share04IconProps) => {
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
        <path d="M11.0257 2.99988C6.5113 3.49884 3 7.32559 3 11.9723C3 16.9581 7.04239 20.9999 12.0289 20.9999C16.668 20.9999 20.4898 17.5018 21 12.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20.9995 6.02517L20 6.02264C16.2634 6.01319 14.3951 6.00847 13.0817 6.95254C12.6452 7.26627 12.2622 7.64832 11.9474 8.084C11 9.39503 11 11.2633 11 14.9999M20.9995 6.02517C21.0062 5.86254 20.9481 5.69894 20.8251 5.55321C20.0599 4.64674 18.0711 2.99988 18.0711 2.99988M20.9995 6.02517C20.9934 6.171 20.9352 6.31604 20.8249 6.44669C20.0596 7.35298 18.0711 8.99988 18.0711 8.99988" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Share04Icon;
