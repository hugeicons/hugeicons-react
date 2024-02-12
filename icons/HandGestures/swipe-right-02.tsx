import * as React from "react";
import type { SVGProps } from "react";

interface SwipeRight02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SwipeRight02Icon = (props: SwipeRight02IconProps) => {
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
        <path d="M20.9995 4.50073H14.9995M20.9995 4.50073C20.9995 3.8005 19.0052 2.49226 18.4995 2.00073M20.9995 4.50073C20.9995 5.20096 19.0052 6.5092 18.4995 7.00073" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.3913 21.9985C15.3395 20.0845 15.4684 19.854 15.6052 19.4282C15.7419 19.0024 16.6982 17.467 17.0366 16.37C18.1313 12.8207 17.111 12.0658 15.7507 11.0592C14.2422 9.94306 11.3968 9.37777 9.98573 9.50015V3.74669C9.98573 2.78337 9.20481 2.00244 8.24148 2.00244C7.27816 2.00244 6.49723 2.78337 6.49723 3.74669V9.96656M6.49774 21.9993V20.9859C6.43328 20.0415 5.49529 18.9239 4.32672 17.3171C3.12509 15.5765 2.86688 14.6978 3.05591 13.8853C3.15329 13.4699 3.40594 12.7837 4.64647 11.6109L6.49723 9.96656M6.49723 14.0328V9.96656" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SwipeRight02Icon;
