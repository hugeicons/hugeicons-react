import * as React from "react";
import type { SVGProps } from "react";

interface BarCode02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BarCode02Icon = (props: BarCode02IconProps) => {
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
        <path d="M2 4V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 4V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 4V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 18V6C8 5.05719 8 4.58579 8.29289 4.29289C8.58579 4 9.05719 4 10 4C10.9428 4 11.4142 4 11.7071 4.29289C12 4.58579 12 5.05719 12 6V18C12 18.9428 12 19.4142 11.7071 19.7071C11.4142 20 10.9428 20 10 20C9.05719 20 8.58579 20 8.29289 19.7071C8 19.4142 8 18.9428 8 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 18V6C18 5.05719 18 4.58579 18.2929 4.29289C18.5858 4 19.0572 4 20 4C20.9428 4 21.4142 4 21.7071 4.29289C22 4.58579 22 5.05719 22 6V18C22 18.9428 22 19.4142 21.7071 19.7071C21.4142 20 20.9428 20 20 20C19.0572 20 18.5858 20 18.2929 19.7071C18 19.4142 18 18.9428 18 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BarCode02Icon;
