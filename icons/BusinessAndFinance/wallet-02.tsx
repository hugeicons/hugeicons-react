import * as React from "react";
import type { SVGProps } from "react";

interface Wallet02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Wallet02Icon = (props: Wallet02IconProps) => {
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
        <path d="M16 14C16 14.8284 16.6716 15.5 17.5 15.5C18.3284 15.5 19 14.8284 19 14C19 13.1716 18.3284 12.5 17.5 12.5C16.6716 12.5 16 13.1716 16 14Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18.9 8C18.9656 7.67689 19 7.34247 19 7C19 4.23858 16.7614 2 14 2C11.2386 2 9 4.23858 9 7C9 7.34247 9.03443 7.67689 9.10002 8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 7.99324H16C18.8284 7.99324 20.2426 7.99324 21.1213 8.87234C22 9.75145 22 11.1663 22 13.9961V15.9971C22 18.8269 22 20.2418 21.1213 21.1209C20.2426 22 18.8284 22 16 22H10C6.22876 22 4.34315 22 3.17157 20.8279C2 19.6557 2 17.7692 2 13.9961V11.9952C2 8.22211 2 6.33558 3.17157 5.16344C4.11466 4.2199 5.52043 4.03589 8 4H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Wallet02Icon;
