import * as React from "react";
import type { SVGProps } from "react";

interface CircleLockMinus01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CircleLockMinus01Icon = (props: CircleLockMinus01IconProps) => {
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
        <path d="M11 22C7.06358 22.0975 4 18.8075 4 15C4 11.134 7.11877 8 10.966 8C13.5444 8 15.7956 9.4077 17 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15.5 9.5V6.5C15.5 4.01472 13.4853 2 11 2C8.51472 2 6.5 4.01472 6.5 6.5V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default CircleLockMinus01Icon;
