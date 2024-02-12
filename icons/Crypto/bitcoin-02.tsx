import * as React from "react";
import type { SVGProps } from "react";

interface Bitcoin02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Bitcoin02Icon = (props: Bitcoin02IconProps) => {
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
        <path d="M12 8C8.13401 8 5 11.134 5 15C5 18.866 8.13401 22 12 22C15.866 22 19 18.866 19 15C19 11.134 15.866 8 12 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 2.75V5.5M11.25 2.75C11.25 3.16421 11.5858 3.5 12 3.5C12.4142 3.5 12.75 3.16421 12.75 2.75C12.75 2.33579 12.4142 2 12 2C11.5858 2 11.25 2.33579 11.25 2.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.75 2.75V5.5L7 6.5M5 2.75C5 3.16421 5.33579 3.5 5.75 3.5C6.16421 3.5 6.5 3.16421 6.5 2.75C6.5 2.33579 6.16421 2 5.75 2C5.33579 2 5 2.33579 5 2.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.25 2.75V5.5L17 6.5M19 2.75C19 3.16421 18.6642 3.5 18.25 3.5C17.8358 3.5 17.5 3.16421 17.5 2.75C17.5 2.33579 17.8358 2 18.25 2C18.6642 2 19 2.33579 19 2.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.4375 17.6667L10.4375 12.3333M12 12.3333V11M12 19V17.6667M10.4375 15H13.5625M13.5625 15C14.0803 15 14.5 15.4477 14.5 16V16.6667C14.5 17.219 14.0803 17.6667 13.5625 17.6667H9.5M13.5625 15C14.0803 15 14.5 14.5523 14.5 14V13.3333C14.5 12.781 14.0803 12.3333 13.5625 12.3333H9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Bitcoin02Icon;
