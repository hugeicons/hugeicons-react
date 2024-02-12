import * as React from "react";
import type { SVGProps } from "react";

interface ShareLocation02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ShareLocation02Icon = (props: ShareLocation02IconProps) => {
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
        <path d="M12 2C17.5237 2 22 6.47778 22 12C22 17.5222 17.5237 22 12 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 21.5C7.81163 21.0953 6.69532 20.5107 5.72302 19.7462M5.72302 4.25385C6.69532 3.50059 7.81163 2.90473 9 2.5M2 10.2461C2.21607 9.08813 2.66019 7.96386 3.29638 6.94078M2 13.7539C2.21607 14.9119 2.66019 16.0361 3.29638 17.0592" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.9961 11.5H12.0024" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 7C14.4353 7 16.5 9.01649 16.5 11.4629C16.5 13.9482 14.4017 15.6924 12.4635 16.8783C12.3223 16.9581 12.1625 17 12 17C11.8375 17 11.6777 16.9581 11.5365 16.8783C9.60195 15.6808 7.5 13.9568 7.5 11.4629C7.5 9.01649 9.56472 7 12 7Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default ShareLocation02Icon;
