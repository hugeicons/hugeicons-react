import * as React from "react";
import type { SVGProps } from "react";

interface EuroSendIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const EuroSendIcon = (props: EuroSendIconProps) => {
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
        <path d="M22 13H14.5M22 13C22 13.7002 20.0057 15.0085 19.5 15.5M22 13C22 12.2998 20.0057 10.9915 19.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default EuroSendIcon;
