import * as React from "react";
import type { SVGProps } from "react";

interface FloorPlanIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FloorPlanIcon = (props: FloorPlanIconProps) => {
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
        <path d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.7191 21.352 18.6251 21.7133 17 21.8731" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 22C12 19.2386 14.2386 17 17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 9H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 9L22 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 22V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 5L9 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default FloorPlanIcon;
