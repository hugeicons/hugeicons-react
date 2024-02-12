import * as React from "react";
import type { SVGProps } from "react";

interface Cylinder04IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Cylinder04Icon = (props: Cylinder04IconProps) => {
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
        <path d="M12 19L9.87868 21.1213M9.87868 21.1213C10.4216 21.6642 11.1716 22 12 22C13.6569 22 15 20.6569 15 19C15 17.3431 13.6569 16 12 16C10.3431 16 9 17.3431 9 19C9 19.8284 9.33579 20.5784 9.87868 21.1213Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 16H14C16.8089 16 18.2134 16 19.2223 15.3259C19.659 15.034 20.034 14.659 20.3259 14.2223C21 13.2134 21 11.8089 21 9C21 6.19108 21 4.78661 20.3259 3.77772C20.034 3.34096 19.659 2.96596 19.2223 2.67412C18.2134 2 16.8089 2 14 2H10C7.19108 2 5.78661 2 4.77772 2.67412C4.34096 2.96596 3.96596 3.34096 3.67412 3.77772C3 4.78661 3 6.19108 3 9C3 11.8089 3 13.2134 3.67412 14.2223C3.96596 14.659 4.34096 15.034 4.77772 15.3259C5.78661 16 7.19108 16 10 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Cylinder04Icon;
