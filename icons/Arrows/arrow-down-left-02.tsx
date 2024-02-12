import * as React from "react";
import type { SVGProps } from "react";

interface ArrowDownLeft02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ArrowDownLeft02Icon = (props: ArrowDownLeft02IconProps) => {
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
        <path d="M11 13L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.45901 17.9172L9.70078 17.8043C11.7127 17.6214 12.7186 17.53 12.9553 16.8761C13.1921 16.2223 12.4778 15.508 11.0493 14.0795L9.92046 12.9507C8.49198 11.5222 7.77774 10.8079 7.12388 11.0447C6.47002 11.2814 6.37857 12.2873 6.19567 14.2992L6.08278 15.541C5.97266 16.7523 5.9176 17.358 6.27979 17.7202C6.64198 18.0824 7.24766 18.0273 8.45901 17.9172Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ArrowDownLeft02Icon;
