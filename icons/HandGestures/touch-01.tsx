import * as React from "react";
import type { SVGProps } from "react";

interface Touch01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Touch01Icon = (props: Touch01IconProps) => {
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
        <path d="M17.8932 21.9882C17.8415 20.075 17.9704 19.8446 18.1071 19.419C18.2438 18.9934 19.2001 17.4585 19.5385 16.3619C20.6332 12.814 19.6129 12.0594 18.2526 11.0533C16.7441 9.93752 13.8988 9.37245 12.4877 9.49478V3.74357C12.4877 2.78062 11.7067 2 10.7434 2C9.78009 2 8.99916 2.78062 8.99916 3.74357V14.0031L6.93899 11.8237C6.29937 11.1302 5.27146 11.0599 4.56992 11.6907C3.90511 12.2885 3.80809 13.2952 4.34652 14.0089L5.63886 15.7218M8.8698 22L8.85027 20.9496C8.89321 19.7183 7.99722 18.9149 6.82864 17.3087C6.74445 17.193 6.66252 17.0811 6.58275 16.9729M6.58275 16.9729C6.22869 16.4924 5.91716 16.0831 5.63886 15.7218M6.58275 16.9729L7.75217 18.5229M6.58275 16.9729L5.63886 15.7218M5.63886 15.7218C5.06749 14.9801 4.63617 14.441 4.26433 13.9055" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Touch01Icon;
