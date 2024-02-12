import * as React from "react";
import type { SVGProps } from "react";

interface VisionIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const VisionIcon = (props: VisionIconProps) => {
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
        <path d="M2.5 8.18677C2.60406 6.08705 2.91537 4.77792 3.84664 3.84664C4.77792 2.91537 6.08705 2.60406 8.18677 2.5M21.5 8.18677C21.3959 6.08705 21.0846 4.77792 20.1534 3.84664C19.2221 2.91537 17.9129 2.60406 15.8132 2.5M15.8132 21.5C17.9129 21.3959 19.2221 21.0846 20.1534 20.1534C21.0846 19.2221 21.3959 17.9129 21.5 15.8132M8.18676 21.5C6.08705 21.3959 4.77792 21.0846 3.84664 20.1534C2.91537 19.2221 2.60406 17.9129 2.5 15.8132" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.6352 11.3178C19.8784 11.6224 20 11.7746 20 12C20 12.2254 19.8784 12.3776 19.6352 12.6822C18.5423 14.0504 15.7514 17 12 17C8.24862 17 5.45768 14.0504 4.36483 12.6822C4.12161 12.3776 4 12.2254 4 12C4 11.7746 4.12161 11.6224 4.36483 11.3178C5.45768 9.9496 8.24862 7 12 7C15.7514 7 18.5423 9.9496 19.6352 11.3178Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default VisionIcon;
