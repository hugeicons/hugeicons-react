import * as React from "react";
import type { SVGProps } from "react";

interface HandPointingLeft01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const HandPointingLeft01Icon = (props: HandPointingLeft01IconProps) => {
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
        <path d="M21.9986 8.83422H21.0513C20.4058 8.83422 19.7775 8.62547 19.2595 8.23892L14.3566 4.58048C13.7911 4.15855 13.0896 3.82155 12.4419 4.10011C11.3935 4.55106 10.7124 5.8233 12.2843 7.38052L13.9937 8.9781L3.57057 8.9781C1.52742 9.03433 1.42614 12.3231 3.57057 12.4638H9.5106C9.31946 13.9441 10.3629 20.9177 14.7831 19.9012C14.9931 19.853 15.2063 19.8048 15.4165 19.7577C16.3353 19.552 17.9727 18.944 18.93 18.2735C19.9266 17.5756 21.5155 17.8219 22 17.8219" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default HandPointingLeft01Icon;
