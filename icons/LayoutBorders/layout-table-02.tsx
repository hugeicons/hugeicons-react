import * as React from "react";
import type { SVGProps } from "react";

interface LayoutTable02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LayoutTable02Icon = (props: LayoutTable02IconProps) => {
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
        <path d="M20.1068 20.1089C18.7156 21.5001 16.4764 21.5001 11.998 21.5001C7.5197 21.5001 5.28053 21.5001 3.88929 20.1089C2.49805 18.7176 2.49805 16.4785 2.49805 12.0001C2.49805 7.52178 2.49805 5.28261 3.88929 3.89137C5.28053 2.50012 7.5197 2.50012 11.998 2.50012C16.4764 2.50012 18.7156 2.50012 20.1068 3.89137C21.498 5.28261 21.498 7.52178 21.498 12.0001C21.498 16.4785 21.498 18.7176 20.1068 20.1089Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.99805 21.5001L8.99805 2.50012" stroke="currentColor" strokeWidth="1.5" />
        <path d="M21.498 8.00012L2.49805 8.00012" stroke="currentColor" strokeWidth="1.5" />
        <path d="M21.498 16.0001H2.49805" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default LayoutTable02Icon;
