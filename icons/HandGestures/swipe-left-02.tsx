import * as React from "react";
import type { SVGProps } from "react";

interface SwipeLeft02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SwipeLeft02Icon = (props: SwipeLeft02IconProps) => {
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
        <path d="M14.9995 4.50146H20.9995M14.9995 4.50146C14.9995 3.80123 16.9938 2.49299 17.4995 2.00146M14.9995 4.50146C14.9995 5.20169 16.9938 6.50993 17.4995 7.00146" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.3913 21.9975C15.3395 20.0835 15.4684 19.853 15.6052 19.4272C15.7419 19.0015 16.6982 17.466 17.0366 16.369C18.1313 12.8197 17.111 12.0648 15.7507 11.0583C14.2422 9.94208 11.3968 9.37679 9.98573 9.49918V3.74572C9.98573 2.78239 9.20481 2.00146 8.24148 2.00146C7.27816 2.00146 6.49723 2.78239 6.49723 3.74572V9.96558M6.49774 21.9983V20.9849C6.43328 20.0405 5.49529 18.923 4.32672 17.3162C3.12509 15.5755 2.86688 14.6968 3.05591 13.8843C3.15329 13.469 3.40594 12.7827 4.64647 11.6099L6.49723 9.96558M6.49723 14.0318V9.96558" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SwipeLeft02Icon;
