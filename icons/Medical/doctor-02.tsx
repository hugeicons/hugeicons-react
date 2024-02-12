import * as React from "react";
import type { SVGProps } from "react";

interface Doctor02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Doctor02Icon = (props: Doctor02IconProps) => {
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
        <path d="M4 22V21C4 19.1308 4 18.1962 4.40192 17.5C4.66523 17.0439 5.04394 16.6652 5.5 16.4019C6.19615 16 7.13077 16 9 16L12 20L15 16C16.8692 16 17.8038 16 18.5 16.4019C18.9561 16.6652 19.3348 17.0439 19.5981 17.5C20 18.1962 20 19.1308 20 21V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.9374 7.99951L16.9552 3.86383C17.1882 2.9171 16.4833 2 15.5228 2H8.47724C7.51665 2 6.81182 2.9171 7.04482 3.86383L8.06263 7.99951M15.9374 7.99951V9.99951C15.9374 12.2087 14.1745 13.9995 12 13.9995C9.82545 13.9995 8.06263 12.2087 8.06263 9.99951V7.99951M15.9374 7.99951H8.06263" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.9998 4V5.99951M12.9995 4.99976L11 4.99976" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Doctor02Icon;
