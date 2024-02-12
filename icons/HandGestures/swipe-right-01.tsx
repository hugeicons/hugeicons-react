import * as React from "react";
import type { SVGProps } from "react";

interface SwipeRight01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SwipeRight01Icon = (props: SwipeRight01IconProps) => {
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
        <path d="M21.0005 4.49905H15.0005M21.0005 4.49905C21.0005 3.79909 19.0062 2.49134 18.5005 2M21.0005 4.49905C21.0005 5.19901 19.0062 6.50675 18.5005 6.9981" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.8937 21.9884C16.842 20.0751 16.9709 19.8448 17.1076 19.4191C17.2443 18.9935 18.2006 17.4587 18.539 16.3621C19.6337 12.8141 18.6134 12.0595 17.2531 11.0534C15.7446 9.93759 12.8993 9.37252 11.4881 9.49486V3.74359C11.4881 2.78063 10.7072 2 9.7439 2C8.78057 2 7.99965 2.78063 7.99965 3.74359V14.0032L5.93948 11.8238C5.29986 11.1303 4.27194 11.06 3.57041 11.6908C2.9056 12.2886 2.80858 13.2953 3.347 14.009L4.63935 15.722M7.87029 22.0002L7.85076 20.9498C7.8937 19.7185 6.99771 18.9151 5.82913 17.3089C5.74494 17.1931 5.66301 17.0813 5.58324 16.973M5.58324 16.973C5.22918 16.4926 4.91765 16.0832 4.63935 15.722M5.58324 16.973L6.75266 18.5231M5.58324 16.973L4.63935 15.722M4.63935 15.722C4.06798 14.9802 3.63666 14.4412 3.26482 13.9056" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SwipeRight01Icon;
