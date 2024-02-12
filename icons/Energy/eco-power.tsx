import * as React from "react";
import type { SVGProps } from "react";

interface EcoPowerIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const EcoPowerIcon = (props: EcoPowerIconProps) => {
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
        <path d="M9 20C5.22895 19.1318 3 15.6772 3 12.5102C3 8.74448 6.37016 5.02317 8.73565 2.875C10.0204 1.70833 11.9797 1.70833 13.2643 2.875C14.7712 4.24338 16.5749 6.25009 17.7511 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 15.5C15.5 16.5 13 18.5 11 22M13 19C10.3362 13.1407 15.8347 11.2355 19.9249 11.0158C20.4185 10.9893 20.6653 10.976 20.8425 11.147C21.0198 11.3179 21.0095 11.5616 20.9891 12.049C20.8194 16.1017 18.9947 21.6068 13 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default EcoPowerIcon;
