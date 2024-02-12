import * as React from "react";
import type { SVGProps } from "react";

interface YogaMatIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const YogaMatIcon = (props: YogaMatIconProps) => {
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
        <path d="M10.5059 15.009L17.1405 10.4977C17.3278 10.3585 17.4949 10.1943 17.6368 10.01C18.1222 9.37919 18.1126 8.50429 17.8049 7.77244C17.1203 6.14392 15.4957 4.99878 13.6005 4.99878C12.6649 4.99878 11.7953 5.27786 11.0722 5.7564L3.99268 10.7554" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.99514 13.5062C5.99514 14.2023 6.36367 15.5855 8.0358 15.9652C9.04177 16.1935 11.9726 15.2301 10.5386 12.4382C9.10468 9.64622 5.6515 9.63165 4.24682 10.5672C3.3884 11.0885 1.72132 12.7159 2.03737 14.8792C2.14955 16.1899 3.1816 18.8493 6.41238 19.0013H16.3037C17.2255 18.9282 17.416 18.7945 18.1181 18.2558C19.0626 17.4076 20.6401 15.8481 21.5565 14.8214C21.7545 14.5996 21.9682 14.3714 21.9956 14.0753V14.0753C22.1413 12.4987 19.7488 13.1815 18.0157 12.9936" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default YogaMatIcon;
