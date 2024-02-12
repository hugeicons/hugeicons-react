import * as React from "react";
import type { SVGProps } from "react";

interface CapRoundIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CapRoundIcon = (props: CapRoundIconProps) => {
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
        <path d="M21 5L10 5C6.13401 5 3 8.13401 3 12C3 15.866 6.13401 19 10 19L21 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 12C13 13.3807 11.8807 14.5 10.5 14.5C9.11929 14.5 8 13.3807 8 12C8 10.6193 9.11929 9.5 10.5 9.5C11.8807 9.5 13 10.6193 13 12Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13 12L21 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default CapRoundIcon;
