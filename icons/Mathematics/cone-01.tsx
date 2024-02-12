import * as React from "react";
import type { SVGProps } from "react";

interface Cone01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Cone01Icon = (props: Cone01IconProps) => {
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
        <path d="M21 18C21 15.7909 16.9706 14 12 14C7.02944 14 3 15.7909 3 18C3 20.2091 7.02944 22 12 22C16.9706 22 21 20.2091 21 18Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20.5 16.5L16.1561 7.39413C14.3427 3.79804 13.436 2 12 2C10.564 2 9.65732 3.79804 7.84393 7.39413L3.5 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Cone01Icon;
