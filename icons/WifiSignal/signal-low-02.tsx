import * as React from "react";
import type { SVGProps } from "react";

interface SignalLow02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SignalLow02Icon = (props: SignalLow02IconProps) => {
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
        <path d="M21 19L18 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 19L11 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 17V16C7 15.0572 7 14.5858 6.70711 14.2929C6.41421 14 5.94281 14 5 14C4.05719 14 3.58579 14 3.29289 14.2929C3 14.5858 3 15.0572 3 16V17C3 17.9428 3 18.4142 3.29289 18.7071C3.58579 19 4.05719 19 5 19C5.94281 19 6.41421 19 6.70711 18.7071C7 18.4142 7 17.9428 7 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SignalLow02Icon;
