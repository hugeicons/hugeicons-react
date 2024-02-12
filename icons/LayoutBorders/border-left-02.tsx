import * as React from "react";
import type { SVGProps } from "react";

interface BorderLeft02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BorderLeft02Icon = (props: BorderLeft02IconProps) => {
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
        <path d="M17.6667 21.2482C18.715 21.0549 19.4866 20.7131 20.0966 20.1084C20.7065 19.5037 21.0514 18.7389 21.2464 17.6996M10 21.4947C10.5895 21.4996 11.2268 21.4996 11.9167 21.4996C12.6066 21.4996 13.2438 21.4996 13.8334 21.4947M21.495 13.8996C21.5 13.3152 21.5 12.6835 21.5 11.9996C21.5 11.3157 21.5 10.684 21.495 10.0996M21.2464 6.29963C21.0514 5.26039 20.7065 4.49555 20.0966 3.89088C19.4866 3.28621 18.715 2.94434 17.6667 2.75106M10 2.50459C10.5893 2.49963 11.2271 2.49963 11.9167 2.49963C12.6065 2.49963 13.2437 2.49963 13.8332 2.50459" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.5 21.4996C5.40606 21.3011 4.60096 20.9499 3.96447 20.3288C2.5 18.8998 2.5 16.5997 2.5 11.9996C2.5 7.39955 2.5 5.0995 3.96447 3.67044C4.60096 3.04933 5.40606 2.69817 6.5 2.49963" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BorderLeft02Icon;
