import * as React from "react";
import type { SVGProps } from "react";

interface ObtuseIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ObtuseIcon = (props: ObtuseIconProps) => {
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
        <path d="M22.0007 17C22.0007 17.5602 19.9999 19 19.9999 19M22.0007 17C22.0007 16.4398 19.9999 15 19.9999 15M22.0007 17H11.5039C10.2864 17 9.6776 17 9.19076 16.6953C8.70393 16.3905 8.43793 15.8429 7.90594 14.7478L2.70815 4.04763M2.70815 4.04763C2.23858 4.32009 2 6.70598 2 6.70598M2.70815 4.04763C3.17772 3.77517 5.35295 4.76046 5.35295 4.76046" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 10.8027C6.88252 10.2922 7.90714 10 9 10C12.3137 10 15 12.6863 15 16C15 16.3407 14.9716 16.6748 14.917 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ObtuseIcon;
