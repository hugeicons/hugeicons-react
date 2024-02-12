import * as React from "react";
import type { SVGProps } from "react";

interface RightTriangleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const RightTriangleIcon = (props: RightTriangleIconProps) => {
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
        <path d="M4 8V6.48477C4 3.77748 4 2.42383 4.79089 2.07276C5.58178 1.72168 6.52338 2.65735 8.40659 4.5287L19.2835 15.3371C21.2721 17.3131 22.2664 18.3012 21.9383 19.1506C21.6102 20 20.2343 20 17.4825 20H16M13 22C13 21.0572 13 20.5858 12.7071 20.2929C12.4142 20 11.9428 20 11 20H6.60556C5.37729 20 4.76315 20 4.38158 19.6036C4 19.2072 4 18.5692 4 17.2932V13C4 12.0572 4 11.5858 3.70711 11.2929C3.41421 11 2.94281 11 2 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 15H5C6.88562 15 7.82843 15 8.41421 15.5858C9 16.1716 9 17.1144 9 19V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default RightTriangleIcon;
