import * as React from "react";
import type { SVGProps } from "react";

interface EuroReceiveIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const EuroReceiveIcon = (props: EuroReceiveIconProps) => {
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
        <path d="M2 10H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 14H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 6C12.0521 4.77011 10.6954 4 9.18869 4C6.32306 4 4 6.78578 4 10.2222V13.7778C4 17.2142 6.32306 20 9.18869 20C10.6954 20 12.0521 19.2299 13 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.5 13H22M14.5 13C14.5 13.7002 16.4943 15.0085 17 15.5M14.5 13C14.5 12.2998 16.4943 10.9915 17 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default EuroReceiveIcon;
