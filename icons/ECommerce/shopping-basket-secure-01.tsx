import * as React from "react";
import type { SVGProps } from "react";

interface ShoppingBasketSecure01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ShoppingBasketSecure01Icon = (props: ShoppingBasketSecure01IconProps) => {
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
        <path d="M11 22H9.62182C7.27396 22 6.10003 22 5.28565 21.2945C4.47127 20.5889 4.27181 19.3991 3.87289 17.0194L2.66933 9.83981C2.48735 8.75428 2.39637 8.21152 2.68773 7.85576C2.9791 7.5 3.51461 7.5 4.58564 7.5H19.4144C20.4854 7.5 21.0209 7.5 21.3123 7.85576C21.6036 8.21152 21.5126 8.75428 21.3307 9.83981L21.0524 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16.9992 14C15.7328 14 14.9117 14.8076 13.9405 15.102C13.5456 15.2217 13.3482 15.2815 13.2683 15.3659C13.1884 15.4502 13.165 15.5735 13.1182 15.8201C12.6174 18.4584 13.712 20.8976 16.3222 21.847C16.6027 21.949 16.7429 22 17.0006 22C17.2583 22 17.3986 21.949 17.679 21.847C20.2891 20.8976 21.3826 18.4584 20.8817 15.8201C20.8349 15.5735 20.8114 15.4502 20.7315 15.3658C20.6516 15.2814 20.4542 15.2216 20.0593 15.102C19.0878 14.8077 18.2657 14 16.9992 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.5 7.5C17.5 4.46243 15.0376 2 12 2C8.96243 2 6.5 4.46243 6.5 7.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default ShoppingBasketSecure01Icon;
