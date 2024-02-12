import * as React from "react";
import type { SVGProps } from "react";

interface Cursor01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Cursor01Icon = (props: Cursor01IconProps) => {
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
        <path d="M7.03497 19.6912C8.74124 19.5189 9.93225 16.7787 11.3342 15.9228C11.8865 15.5856 12.3761 15.9281 12.722 16.3784L16.069 20.7348C16.6521 21.4939 17.0628 21.7198 17.9421 21.2696C19.2939 20.5775 20.5785 19.2911 21.2696 17.9418C21.7198 17.0628 21.4939 16.652 20.735 16.069L16.3784 12.722C15.9281 12.376 15.5857 11.8865 15.9229 11.3342C16.7787 9.93222 19.519 8.74121 19.6912 7.03495C19.9941 3.92489 5.43696 1.09287 3.26477 3.26477C1.09286 5.43695 3.92489 19.994 7.03497 19.6912Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Cursor01Icon;
