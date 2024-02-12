import * as React from "react";
import type { SVGProps } from "react";

interface Rhombus01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Rhombus01Icon = (props: Rhombus01IconProps) => {
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
        <path d="M8.05622 4.78867C9.91534 2.92956 10.8449 2 12 2C13.1551 2 14.0847 2.92956 15.9438 4.78867L19.2113 8.05622C21.0704 9.91534 22 10.8449 22 12C22 13.1551 21.0704 14.0847 19.2113 15.9438L15.9438 19.2113C14.0847 21.0704 13.1551 22 12 22C10.8449 22 9.91534 21.0704 8.05622 19.2113L4.78867 15.9438C2.92956 14.0847 2 13.1551 2 12C2 10.8449 2.92956 9.91534 4.78867 8.05622L8.05622 4.78867Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Rhombus01Icon;
