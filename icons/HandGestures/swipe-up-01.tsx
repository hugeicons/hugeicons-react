import * as React from "react";
import type { SVGProps } from "react";

interface SwipeUp01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SwipeUp01Icon = (props: SwipeUp01IconProps) => {
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
        <path d="M18.5005 2.00391V8.00156M18.5005 2.00391C17.8003 2.00391 16.492 3.99743 16.0005 4.50293M18.5005 2.00391C19.2007 2.00391 20.509 3.99743 21.0005 4.50293" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.8937 21.9882C16.842 20.075 16.9709 19.8446 17.1076 19.419C17.2443 18.9934 18.2006 17.4585 18.539 16.3619C19.6337 12.814 18.6134 12.0594 17.2531 11.0533C15.7446 9.93752 12.8993 9.37245 11.4881 9.49478V3.74357C11.4881 2.78062 10.7072 2 9.7439 2C8.78057 2 7.99965 2.78062 7.99965 3.74357V14.0031L5.93948 11.8237C5.29986 11.1302 4.27194 11.0599 3.57041 11.6907C2.9056 12.2885 2.80858 13.2952 3.347 14.0089L4.63935 15.7218M7.87029 22L7.85076 20.9496C7.8937 19.7183 6.99771 18.9149 5.82913 17.3087C5.74494 17.193 5.66301 17.0811 5.58324 16.9729M5.58324 16.9729C5.22918 16.4924 4.91765 16.0831 4.63935 15.7218M5.58324 16.9729L6.75266 18.5229M5.58324 16.9729L4.63935 15.7218M4.63935 15.7218C4.06798 14.9801 3.63666 14.441 3.26482 13.9055" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SwipeUp01Icon;
