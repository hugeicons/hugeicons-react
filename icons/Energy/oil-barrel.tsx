import * as React from "react";
import type { SVGProps } from "react";

interface OilBarrelIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const OilBarrelIcon = (props: OilBarrelIconProps) => {
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
        <ellipse cx="12" cy="4" rx="8" ry="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 12.5C12.8284 12.5 13.5 11.8284 13.5 11C13.5 10 12 8.5 12 8.5C12 8.5 10.5 10 10.5 11C10.5 11.8284 11.1716 12.5 12 12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 5V10.5465C19.6372 10.9771 20 11.4727 20 12C20 13.6569 16.4183 15 12 15C7.58172 15 4 13.6569 4 12C4 11.4727 4.36284 10.9771 5 10.5465V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 13.5V17.5465C19.6372 17.9771 20 18.4727 20 19C20 20.6569 16.4183 22 12 22C7.58172 22 4 20.6569 4 19C4 18.4727 4.36284 17.9771 5 17.5465V13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default OilBarrelIcon;
