import * as React from "react";
import type { SVGProps } from "react";

interface PoundReceiveIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PoundReceiveIcon = (props: PoundReceiveIconProps) => {
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
        <path d="M14.25 13.0249H21.75M14.25 13.0249C14.25 13.7251 16.25 15.0249 17.25 15.5249M14.25 13.0249C14.25 12.3247 16.4167 11.0249 17.25 10.5249" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.662 8.5249C12.662 6.40426 10.9917 3.91073 8.25 4.0022C7.52476 4.0264 6.72455 4.25832 5.86047 4.76694C4.4716 5.68467 2.67966 8.73578 4.84287 11.9368C5.89496 13.4936 6.86653 13.5249 9.75 13.5249H2.25M6.703 14.0071C6.16468 15.5014 4.53524 18.8986 2.32404 19.9868H11.2098C11.6185 19.9868 12.8337 20.199 14.229 18.924" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default PoundReceiveIcon;
