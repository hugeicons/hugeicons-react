import * as React from "react";
import type { SVGProps } from "react";

interface EnteringGeoFenceIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const EnteringGeoFenceIcon = (props: EnteringGeoFenceIconProps) => {
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
        <path d="M12 17L12 3M12 17C12.3728 17 12.6728 16.6574 13.2728 15.9723L15 14M12 17C11.6272 17 11.3272 16.6574 10.7272 15.9723L9 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 15C3.7492 15.6327 3 16.4385 3 17.3158C3 19.3505 7.02944 21 12 21C16.9706 21 21 19.3505 21 17.3158C21 16.4385 20.2508 15.6327 19 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default EnteringGeoFenceIcon;
