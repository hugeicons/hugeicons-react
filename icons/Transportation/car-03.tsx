import * as React from "react";
import type { SVGProps } from "react";

interface Car03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Car03Icon = (props: Car03IconProps) => {
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
        <path d="M9.00684 17C9.00684 18.1046 8.11141 19 7.00684 19C5.90227 19 5.00684 18.1046 5.00684 17C5.00684 15.8954 5.90227 15 7.00684 15C8.11141 15 9.00684 15.8954 9.00684 17Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M19.0068 17C19.0068 18.1046 18.1114 19 17.0068 19C15.9022 19 15.0068 18.1046 15.0068 17C15.0068 15.8954 15.9022 15 17.0068 15C18.1114 15 19.0068 15.8954 19.0068 17Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2.00686 10H18.0069M2.00686 10C2.00686 10.78 1.98687 13.04 2.01085 15.26C2.04682 15.98 2.16673 16.58 5.00857 17M2.00686 10C2.22269 8.26 3.16197 6.2 3.64161 5.42M9.00686 10V5M14.997 17H9.00152M2.02284 5H12.2391C12.2391 5 12.7786 5 13.2583 5.048C14.1576 5.132 14.913 5.54 15.6684 6.56C16.4683 7.64 17.0834 9.008 17.8987 9.74C19.2537 10.9564 21.8318 10.58 21.9756 13.16C22.0116 14.48 22.0116 15.92 21.9517 16.16C21.8554 16.8667 21.3105 16.9821 20.6327 17C20.0444 17.0156 19.3353 16.9721 18.9899 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Car03Icon;
