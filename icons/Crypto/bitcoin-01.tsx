import * as React from "react";
import type { SVGProps } from "react";

interface Bitcoin01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Bitcoin01Icon = (props: Bitcoin01IconProps) => {
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
        <path d="M12 2C6.47716 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 5C8.13401 5 5 8.134 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 2V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 19V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3.33984 7L5.93792 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18.0625 15.5L20.6606 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20.6602 7L18.0621 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5.9375 15.5L3.33942 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.4375 14.6667L10.4375 9.33333M12 9.33333V8M12 16V14.6667M10.4375 12H13.5625M13.5625 12C14.0803 12 14.5 12.4477 14.5 13V13.6667C14.5 14.219 14.0803 14.6667 13.5625 14.6667H9.5M13.5625 12C14.0803 12 14.5 11.5523 14.5 11V10.3333C14.5 9.78105 14.0803 9.33333 13.5625 9.33333H9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Bitcoin01Icon;
