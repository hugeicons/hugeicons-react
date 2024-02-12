import * as React from "react";
import type { SVGProps } from "react";

interface Coupon01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Coupon01Icon = (props: Coupon01IconProps) => {
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
        <path d="M10.8738 21.5123L8.84345 20.3072C8.32816 20.0014 8.07051 19.8484 7.78457 19.8396C7.47557 19.83 7.21336 19.9767 6.65655 20.3072C6.03294 20.6774 4.79293 21.697 3.99083 21.2108C3.5 20.9132 3.5 20.1574 3.5 18.6457V8C3.5 5.17157 3.5 3.75736 4.37868 2.87868C5.25736 2 6.67157 2 9.5 2H14.5C17.3284 2 18.7426 2 19.6213 2.87868C20.5 3.75736 20.5 5.17157 20.5 8V18.6457C20.5 20.1574 20.5 20.9132 20.0092 21.2108C19.2071 21.697 17.9671 20.6774 17.3434 20.3072C16.8282 20.0014 16.5705 19.8484 16.2846 19.8396C15.9756 19.83 15.7134 19.9767 15.1566 20.3072L13.1262 21.5123C12.5786 21.8374 12.3047 21.9999 12 21.9999C11.6953 21.9999 11.4214 21.8374 10.8738 21.5123Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 8L9 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 14H14.991M9.00897 8H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Coupon01Icon;
