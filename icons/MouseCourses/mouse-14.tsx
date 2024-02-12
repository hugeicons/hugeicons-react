import * as React from "react";
import type { SVGProps } from "react";

interface Mouse14IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Mouse14Icon = (props: Mouse14IconProps) => {
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
        <path d="M22 6.16705C21.5817 6.96357 20.6554 7.23648 19.931 6.77661L17.7448 5.38882C16.0959 4.34208 15.2714 3.81871 14.4634 4.05676C13.906 4.22097 13.5066 4.70326 13 5.58178" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.1851 18.9941C9.48005 21.4312 12.2743 19.1116 14.3687 15.5464C16.463 11.9811 17.1098 8.44303 12.8149 6.00594C8.51993 3.56885 5.72575 5.8884 3.63136 9.45367C1.53697 13.0189 0.890156 16.557 5.1851 18.9941Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11.4883 7.99805L10.4883 9.7301" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Mouse14Icon;
