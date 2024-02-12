import * as React from "react";
import type { SVGProps } from "react";

interface JarIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const JarIcon = (props: JarIconProps) => {
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
        <path d="M7.00474 2.07612V16C7.00474 18.8284 7.00474 20.2426 7.8848 21.1213C8.76487 22 10.1813 22 13.0142 22C15.8471 22 17.2635 22 18.1436 21.1213C19.0237 20.2426 19.0237 18.8284 19.0237 16V7.25C19.0237 6.29528 19.206 5.75727 19.7749 5C20.2183 4.40963 21.4177 3.25743 20.8507 2.43367C20.5523 2 19.7923 2 18.2725 2H10.0095C7.17658 2 5.76013 2 4.88007 2.87868C4 3.75736 4 5.17157 4 8V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 8H16M19 11.3333H16M19 14.6667H16M18.5 18H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default JarIcon;
