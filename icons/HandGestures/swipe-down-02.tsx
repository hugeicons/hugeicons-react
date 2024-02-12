import * as React from "react";
import type { SVGProps } from "react";

interface SwipeDown02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SwipeDown02Icon = (props: SwipeDown02IconProps) => {
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
        <path d="M18.5 8.00159V2.00159M18.5 8.00159C17.7998 8.00159 16.4915 6.00729 16 5.50159M18.5 8.00159C19.2002 8.00159 20.5085 6.00729 21 5.50159" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.3917 21.9976C15.34 20.0836 15.4689 19.8531 15.6056 19.4274C15.7424 19.0016 16.6987 17.4661 17.0371 16.3691C18.1318 12.8198 17.1115 12.0649 15.7512 11.0584C14.2426 9.9422 11.3973 9.37692 9.98622 9.4993V3.74584C9.98622 2.78251 9.2053 2.00159 8.24197 2.00159C7.27865 2.00159 6.49772 2.78251 6.49772 3.74584V9.9657M6.49823 21.9984V20.985C6.43377 20.0406 5.49578 18.9231 4.32721 17.3163C3.12558 15.5756 2.86737 14.6969 3.0564 13.8845C3.15377 13.4691 3.40643 12.7828 4.64696 11.61L6.49772 9.9657M6.49772 14.032V9.9657" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SwipeDown02Icon;
