import * as React from "react";
import type { SVGProps } from "react";

interface Sheriff01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Sheriff01Icon = (props: Sheriff01IconProps) => {
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
        <path d="M2 8C5.47582 13.3333 18.5242 13.3333 22 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 10L7.125 2.9922C7.76866 0.869541 9.27521 2.71887 10.5965 3.33984C11.4745 3.75243 12.5255 3.75243 13.4035 3.33984C14.7248 2.71887 16.2313 0.869541 16.875 2.9922L19 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 11C19 13.808 18.6968 16.4602 16.4312 18.0121C14.5873 19.2751 10.8574 19.3382 10 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 11C5 13.808 5.30317 16.4602 7.56884 18.0121C9.41265 19.2751 13.1426 19.3382 14 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Sheriff01Icon;
