import * as React from "react";
import type { SVGProps } from "react";

interface SwipeUp02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SwipeUp02Icon = (props: SwipeUp02IconProps) => {
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
        <path d="M18.5 2.00146V8.00146M18.5 2.00146C17.7998 2.00146 16.4915 3.99576 16 4.50146M18.5 2.00146C19.2002 2.00146 20.5085 3.99576 21 4.50146" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.3917 21.9975C15.34 20.0835 15.4689 19.853 15.6056 19.4272C15.7424 19.0015 16.6987 17.466 17.0371 16.369C18.1318 12.8197 17.1115 12.0648 15.7512 11.0583C14.2426 9.94208 11.3973 9.37679 9.98622 9.49918V3.74572C9.98622 2.78239 9.2053 2.00146 8.24197 2.00146C7.27865 2.00146 6.49772 2.78239 6.49772 3.74572V9.96558M6.49823 21.9983V20.9849C6.43377 20.0405 5.49578 18.923 4.32721 17.3162C3.12558 15.5755 2.86737 14.6968 3.0564 13.8843C3.15377 13.469 3.40643 12.7827 4.64696 11.6099L6.49772 9.96558M6.49772 14.0318V9.96558" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SwipeUp02Icon;
