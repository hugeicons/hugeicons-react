import * as React from "react";
import type { SVGProps } from "react";

interface Mining02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Mining02Icon = (props: Mining02IconProps) => {
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
        <path d="M14.8814 5.18605C13.459 4.31449 9.8081 2.64154 6.51949 3.06854C8.50877 4.43854 9.55528 5.17541 12.3785 7.68896M18.8139 9.11851C19.6855 10.5409 21.3585 14.1918 20.9315 17.4804C19.5614 15.4911 18.8246 14.4446 16.311 11.6214M10.4727 11.4183L3.4233 18.4677C2.85149 19.0395 2.86008 19.9751 3.44248 20.5575C4.02489 21.1399 4.96056 21.1485 5.53237 20.5767L12.5818 13.5274M11.9865 9.22564L14.7742 12.0134C15.0838 12.3229 15.5845 12.3241 15.8927 12.0159L19.3464 8.5622C19.6546 8.25405 19.6534 7.75331 19.3439 7.44376L16.5561 4.65604C16.2466 4.34649 15.7458 4.34535 15.4377 4.6535L11.9839 8.10721C11.6758 8.41535 11.6769 8.91609 11.9865 9.22564Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Mining02Icon;
