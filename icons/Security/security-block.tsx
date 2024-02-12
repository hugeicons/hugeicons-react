import * as React from "react";
import type { SVGProps } from "react";

interface SecurityBlockIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SecurityBlockIcon = (props: SecurityBlockIconProps) => {
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
        <path d="M4.5 5C4.5 5 3.32697 5.20385 3.1372 5.41475C2.94743 5.62566 2.89186 5.93385 2.78072 6.55024C1.59143 13.1461 4.1909 19.2441 10.3903 21.6176C11.0564 21.8726 11.3894 22.0001 12.0015 22.0001C12.6135 22.0001 12.9466 21.8726 13.6126 21.6176C15.6225 20.848 17.2537 19.9426 18.5 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.5 3.42011C8.8253 2.69687 10.2287 2 11.9982 2C15.0061 2 16.9585 4.01371 19.2659 4.74758C20.2037 5.04583 20.6726 5.19496 20.8624 5.4053C21.0522 5.61564 21.1078 5.92306 21.219 6.53789C21.8418 9.98199 21.4267 13.29 20 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 2L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SecurityBlockIcon;
