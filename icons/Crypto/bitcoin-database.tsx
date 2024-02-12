import * as React from "react";
import type { SVGProps } from "react";

interface BitcoinDatabaseIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BitcoinDatabaseIcon = (props: BitcoinDatabaseIconProps) => {
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
        <ellipse cx="12" cy="5" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 15C7.58172 15 4 13.6569 4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15.9375 20.6667L15.9375 15.3333M17.5 15.3333V14M17.5 22V20.6667M15.9375 18H19.0625M19.0625 18C19.5803 18 20 18.4477 20 19V19.6667C20 20.219 19.5803 20.6667 19.0625 20.6667H15M19.0625 18C19.5803 18 20 17.5523 20 17V16.3333C20 15.781 19.5803 15.3333 19.0625 15.3333H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 12V5M12 22C7.58172 22 4 20.6569 4 19V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BitcoinDatabaseIcon;
