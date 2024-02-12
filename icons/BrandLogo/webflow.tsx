import * as React from "react";
import type { SVGProps } from "react";

interface WebflowIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const WebflowIcon = (props: WebflowIconProps) => {
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
        <path d="M18.2327 15.2949L22 5.5H21.6038C19.4516 5.5 17.541 6.87715 16.8604 8.91886L15 14.5L14 5.5H13.9203C11.8583 5.5 10.0077 6.76591 9.26031 8.68777L7 14.5L6.44173 9.47554C6.19025 7.21226 4.27721 5.5 2 5.5L5 18.5C7.08422 18.5 8.98482 17.2071 9.71664 15.2556L11.5 10.5L13 18.5H13.566C15.6349 18.5 17.4901 17.2259 18.2327 15.2949Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default WebflowIcon;
