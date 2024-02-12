import * as React from "react";
import type { SVGProps } from "react";

interface Jsx02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Jsx02Icon = (props: Jsx02IconProps) => {
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
        <path d="M3.5 13V12.1963C3.5 9.22892 3.5 7.74523 3.96894 6.56024C4.72281 4.65521 6.31714 3.15255 8.33836 2.44201C9.59563 2.00003 11.1698 2.00003 14.3182 2.00003C16.1173 2.00003 17.0168 2.00003 17.7352 2.25259C18.8902 2.65861 19.8012 3.51728 20.232 4.60587C20.5 5.283 20.5 6.13082 20.5 7.82646V12.0142V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.5 12C3.5 10.1591 4.99238 8.66667 6.83333 8.66667C7.49912 8.66667 8.28404 8.78333 8.93137 8.60988C9.50652 8.45576 9.95576 8.00652 10.1099 7.43136C10.2833 6.78404 10.1667 5.99912 10.1667 5.33333C10.1667 3.49238 11.6591 2 13.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.5 16V20.25C7.5 21.2165 6.71651 22 5.75002 22C4.78365 22 4.00021 21.2167 4.00004 20.2503L4 20M13.0002 16H11.8343C11.3683 16 11.1353 16 10.9516 16.0761C10.3257 16.3353 10.3343 16.9447 10.3343 17.5C10.3343 18.0553 10.3257 18.6647 10.9516 18.9239C11.1353 19 11.3683 19 11.8343 19C12.3002 19 12.5332 19 12.7169 19.0761C13.3345 19.3319 13.3344 19.9287 13.3343 20.4779V20.5221C13.3344 21.0713 13.3345 21.6681 12.7169 21.9239C12.5332 22 12.3002 22 11.8343 22H10.5643M16 16L18 19M18 19L20 22M18 19L20 16M18 19L16 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Jsx02Icon;
