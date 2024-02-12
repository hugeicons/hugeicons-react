import * as React from "react";
import type { SVGProps } from "react";

interface LinkSquare01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LinkSquare01Icon = (props: LinkSquare01IconProps) => {
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
        <path d="M11.1005 3.00208C7.45162 3.00864 5.54086 3.09822 4.31974 4.31931C3.00195 5.63706 3.00195 7.75796 3.00195 11.9997C3.00195 16.2415 3.00195 18.3624 4.31974 19.6801C5.63753 20.9979 7.75849 20.9979 12.0004 20.9979C16.2423 20.9979 18.3632 20.9979 19.6811 19.6801C20.9021 18.4591 20.9917 16.5484 20.9983 12.8996" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.4809 3.51715L14.9316 9.05114M20.4809 3.51715C19.9869 3.02264 16.6593 3.06873 15.9558 3.07874M20.4809 3.51715C20.9748 4.01166 20.9288 7.34292 20.9188 8.04718" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default LinkSquare01Icon;
