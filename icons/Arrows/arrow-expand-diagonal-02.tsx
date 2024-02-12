import * as React from "react";
import type { SVGProps } from "react";

interface ArrowExpandDiagonal02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ArrowExpandDiagonal02Icon = (props: ArrowExpandDiagonal02IconProps) => {
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
        <path d="M16 8L7.99999 16M6.99999 3.23663C6.24939 3.22596 3.7637 2.70959 3.2366 3.23663C2.7096 3.76367 3.226 6.24941 3.2366 7M20.7634 17C20.774 17.7506 21.2904 20.2363 20.7634 20.7634C20.2363 21.2904 17.7506 20.774 17 20.7634M9.00256 9.00714L3.61682 3.62135M20.374 20.374L14.9883 14.9882" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ArrowExpandDiagonal02Icon;
