import * as React from "react";
import type { SVGProps } from "react";

interface ArrangeByNumbers19IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ArrangeByNumbers19Icon = (props: ArrangeByNumbers19IconProps) => {
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
        <path d="M7 10.0003V3.94909C7 3.37458 7 3.08732 6.76959 3.01583C6.26306 2.85867 5.5 4 5.5 4M7 10.0003H5.5M7 10.0003H8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 17.5V15.75C9 14.925 9 14.5126 8.70711 14.2563C8.41421 14 7.94281 14 7 14C6.05719 14 5.58579 14 5.29289 14.2563C5 14.5126 5 14.925 5 15.75C5 16.575 5 16.9874 5.29289 17.2437C5.58579 17.5 6.05719 17.5 7 17.5H9ZM9 17.5V18.375C9 19.6124 9 20.2312 8.56066 20.6156C8.12132 21 7.41421 21 6 21H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.5 20V4M16.5 20C15.7998 20 14.4915 18.0057 14 17.5M16.5 20C17.2002 20 18.5085 18.0057 19 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ArrangeByNumbers19Icon;
