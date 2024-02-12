import * as React from "react";
import type { SVGProps } from "react";

interface CursorProgress02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CursorProgress02Icon = (props: CursorProgress02IconProps) => {
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
        <path d="M10 3.32038C6.75053 2.8233 3.67361 2.85605 2.76477 3.76477C0.59286 5.93695 3.42489 20.494 6.53497 20.1912C8.24124 20.0189 9.43225 17.2787 10.8342 16.4228C11.3865 16.0856 11.8761 16.4281 12.222 16.8784L15.569 21.2348C16.1521 21.9939 16.5628 22.2198 17.4421 21.7696C18.7939 21.0775 20.0785 19.7911 20.7696 18.4418C21.2198 17.5628 20.9939 17.152 20.235 16.569L18 14.8519" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 7.00013C16.5211 5.21272 15.132 3.91229 13.4651 3.46388M17 7.00013C18.3088 5.69133 18.7403 3.83746 18.2946 2.16923M17 7.00013C18.7878 7.47917 20.609 6.92595 21.8309 5.70585M17 7.00013C17.4789 8.78744 18.8679 10.0878 20.5348 10.5362M17 7.00013C15.6912 8.30889 15.2597 10.1626 15.7053 11.8308M17 7.00013C15.2121 6.52107 13.391 7.07439 12.1692 8.29462M13.4651 3.46388C12.5599 4.36875 12 5.61899 12 7C12 7.44772 12.0588 7.8817 12.1692 8.29462M13.4651 3.46388C14.3698 2.5594 15.6196 2 17 2C17.4477 2 17.8817 2.05885 18.2946 2.16923M18.2946 2.16923C20.0157 2.6293 21.371 3.98469 21.8309 5.70585M21.8309 5.70585C21.9412 6.11863 22 6.55245 22 7C22 8.38107 21.4401 9.63137 20.5348 10.5362M20.5348 10.5362C19.6301 11.4407 18.3804 12 17 12C16.5523 12 16.1183 11.9411 15.7053 11.8308M15.7053 11.8308C13.9844 11.3707 12.6293 10.0155 12.1692 8.29462" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default CursorProgress02Icon;
