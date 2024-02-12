import * as React from "react";
import type { SVGProps } from "react";

interface ShoppingBasketAdd01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ShoppingBasketAdd01Icon = (props: ShoppingBasketAdd01IconProps) => {
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
        <path d="M21.0524 11.5L21.3307 9.83981C21.5126 8.75428 21.6036 8.21152 21.3123 7.85576C21.0209 7.5 20.4854 7.5 19.4144 7.5H4.58564C3.51461 7.5 2.9791 7.5 2.68773 7.85576C2.39637 8.21152 2.48735 8.75428 2.66933 9.83981L3.87289 17.0194C4.27181 19.3991 4.47127 20.5889 5.28565 21.2945C6.10003 22 7.27396 22 9.62182 22H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 18H22M18 22L18 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17.5 7.5C17.5 4.46243 15.0376 2 12 2C8.96243 2 6.5 4.46243 6.5 7.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default ShoppingBasketAdd01Icon;
