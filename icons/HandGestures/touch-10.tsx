import * as React from "react";
import type { SVGProps } from "react";

interface Touch10IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Touch10Icon = (props: Touch10IconProps) => {
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
        <path d="M6.5 21L6.5 11.5C6.5 8.46243 8.96243 6 12 6C15.0376 6 17.5 8.46243 17.5 11.5L17.5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 13V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.5 11.5C14.5 10.1193 13.3807 9 12 9C10.6193 9 9.5 10.1193 9.5 11.5V12.75C9.5 13.4404 10.0596 14 10.75 14H13.25C13.9404 14 14.5 13.4404 14.5 12.75V11.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Touch10Icon;
