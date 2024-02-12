import * as React from "react";
import type { SVGProps } from "react";

interface Magnet01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Magnet01Icon = (props: Magnet01IconProps) => {
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
        <path d="M16 12V11C16 10.0572 16 9.58579 16.2929 9.29289C16.5858 9 17.0572 9 18 9C18.9428 9 19.4142 9 19.7071 9.29289C20 9.58579 20 10.0572 20 11V12M16 12V14C16 16.2091 14.2091 18 12 18C9.79086 18 8 16.2091 8 14V12M16 12H20M20 12V14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14V12M8 12V11C8 10.0572 8 9.58579 7.70711 9.29289C7.41421 9 6.94281 9 6 9C5.05719 9 4.58579 9 4.29289 9.29289C4 9.58579 4 10.0572 4 11V12M8 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 2V6M20 4H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 4H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Magnet01Icon;
