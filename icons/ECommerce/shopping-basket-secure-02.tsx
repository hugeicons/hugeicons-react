import * as React from "react";
import type { SVGProps } from "react";

interface ShoppingBasketSecure02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ShoppingBasketSecure02Icon = (props: ShoppingBasketSecure02IconProps) => {
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
        <path d="M20.5601 11.5L20.8221 9.93557C21.0113 8.8063 21.1059 8.24167 20.8146 7.87083C20.5234 7.5 19.9853 7.5 18.9092 7.5H5.09079C4.01468 7.5 3.47662 7.5 3.18537 7.87083C2.89411 8.24167 2.98869 8.8063 3.17786 9.93557L4.34085 16.8781C4.75097 19.3264 4.95603 20.5505 5.76809 21.2752C6.58014 22 7.66701 22 10 22H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16.9992 14C15.7328 14 14.9117 14.8076 13.9405 15.102C13.5456 15.2217 13.3482 15.2815 13.2683 15.3659C13.1884 15.4502 13.165 15.5735 13.1182 15.8201C12.6174 18.4584 13.712 20.8976 16.3222 21.847C16.6027 21.949 16.7429 22 17.0006 22C17.2583 22 17.3986 21.949 17.679 21.847C20.2891 20.8976 21.3826 18.4584 20.8817 15.8201C20.8349 15.5735 20.8114 15.4502 20.7315 15.3658C20.6516 15.2814 20.4542 15.2216 20.0593 15.102C19.0878 14.8077 18.2657 14 16.9992 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 7.5V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V7.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4.5 17.5H9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default ShoppingBasketSecure02Icon;
