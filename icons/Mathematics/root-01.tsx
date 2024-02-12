import * as React from "react";
import type { SVGProps } from "react";

interface Root01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Root01Icon = (props: Root01IconProps) => {
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
        <path d="M22 5H13.6138C12.3798 5 11.965 5.1398 11.659 6.36394L9.33913 15.6416C8.78948 17.8398 8.51466 18.9389 7.78481 18.9976C7.05496 19.0564 6.55032 18.02 5.54104 15.9472L4.97014 14.7748C4.53541 13.882 4.31804 13.4356 3.87855 13.3147C3.21709 13.1327 2.5084 13.6703 2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.4004 11.0035C15.1804 10.9195 16.1337 11.038 16.4404 11.6395C17.0523 12.8395 18.0604 15.3595 18.4204 16.1395C18.6004 16.4395 18.7804 16.7995 19.5004 16.9795C19.9804 17.0395 20.6039 16.995 20.6039 16.995" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M21.0005 10.998C19.5005 10.998 18.5405 12.66 17.7005 13.68C16.6205 15.24 15.4205 17.1 13.9805 16.98" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Root01Icon;
