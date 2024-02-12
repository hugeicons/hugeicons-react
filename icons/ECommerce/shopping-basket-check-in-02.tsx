import * as React from "react";
import type { SVGProps } from "react";

interface ShoppingBasketCheckIn02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ShoppingBasketCheckIn02Icon = (props: ShoppingBasketCheckIn02IconProps) => {
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
        <path d="M13 22H10.0796C7.74664 22 6.58014 22 5.76809 21.2752C4.95603 20.5505 4.75097 19.3264 4.34085 16.8781L3.17786 9.93557C2.98869 8.8063 2.89411 8.24167 3.18537 7.87083C3.47662 7.5 4.01468 7.5 5.09079 7.5H18.9092C19.9853 7.5 20.5234 7.5 20.8146 7.87083C21.1059 8.24167 21.0113 8.8063 20.8221 9.93557L20.5601 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 16.5C16.4915 15.9943 17.7998 14 18.5 14M21 16.5C20.5085 15.9943 19.2002 14 18.5 14M18.5 14V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 7.5V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V7.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4.5 17.5H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default ShoppingBasketCheckIn02Icon;
