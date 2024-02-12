import * as React from "react";
import type { SVGProps } from "react";

interface PoliceStationIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PoliceStationIcon = (props: PoliceStationIconProps) => {
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
        <path d="M15.6181 6.99988C16.2653 7.12389 16.7429 7.34168 17.1213 7.72419C18 8.61248 18 10.0422 18 12.9015V21.9999H6V12.9015C6 10.0422 6 8.61248 6.87868 7.72419C7.25705 7.34168 7.73473 7.12389 8.38188 6.99988" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 21.9999H21C21.4714 21.9999 21.7071 21.9999 21.8536 21.8534C22 21.707 22 21.4713 22 20.9999V15.9999C22 14.1143 22 13.1715 21.4142 12.5857C20.8284 11.9999 19.8856 11.9999 18 11.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 21.9999H3C2.5286 21.9999 2.29289 21.9999 2.14645 21.8534C2 21.707 2 21.4713 2 20.9999V15.9999C2 14.1143 2 13.1715 2.58579 12.5857C3.17157 11.9999 4.11438 11.9999 6 11.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 22L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 15H10.2M15 15H13.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.04217 4C10.9662 4 12.0004 2 12.0004 2C12.0004 2 13.0338 4 15.9578 4C16.1752 5.6875 15.6528 9.65 12.0004 11C8.34791 9.65 7.82476 5.6875 8.04217 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default PoliceStationIcon;
