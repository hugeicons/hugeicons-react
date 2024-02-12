import * as React from "react";
import type { SVGProps } from "react";

interface Bread02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Bread02Icon = (props: Bread02IconProps) => {
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
        <path d="M12 14C12 17 9.76142 17 7 17C4.23858 17 2 17 2 14C2 11 4.23858 7 7 7C9.76142 7 12 11 12 14Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 7H17C19.7614 7 22 11 22 14C22 17 19.7614 17 17 17H7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5.86019 17C7.4363 17 9 16.1 9 14C9 11.9 8.14239 10 6.6451 10C5.14782 10 4.31835 13.97 5.7172 14.5C7.03693 15 7.04538 13 7.04538 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Bread02Icon;
