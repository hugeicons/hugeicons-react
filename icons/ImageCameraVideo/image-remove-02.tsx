import * as React from "react";
import type { SVGProps } from "react";

interface ImageRemove02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ImageRemove02Icon = (props: ImageRemove02IconProps) => {
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
        <path d="M11.5 2.5C7.02166 2.5 4.78249 2.5 3.39124 3.89124C2 5.28249 2 7.52166 2 12C2 16.4783 2 18.7175 3.39124 20.1088C4.78249 21.5 7.02166 21.5 11.5 21.5C15.9783 21.5 18.2175 21.5 19.6088 20.1088C21 18.7175 21 16.4783 21 12C21 11.6715 21 11.355 20.9995 11.05" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 13.6354C2.61902 13.5455 3.24484 13.5011 3.87171 13.5027C6.52365 13.4466 9.11064 14.2729 11.1711 15.8342C13.082 17.2821 14.4247 19.2749 15 21.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M21 16.3962C19.8246 15.8009 18.6088 15.4988 17.3862 15.5001C15.5345 15.4928 13.7015 16.1733 12 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M22 5.5H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default ImageRemove02Icon;
