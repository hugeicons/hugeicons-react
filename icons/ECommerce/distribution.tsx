import * as React from "react";
import type { SVGProps } from "react";

interface DistributionIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DistributionIcon = (props: DistributionIconProps) => {
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
        <path d="M4.5 10.2653V6H19.5V10.2653C19.5 13.4401 19.5 15.0275 18.5237 16.0137C17.5474 17 15.976 17 12.8333 17H11.1667C8.02397 17 6.45262 17 5.47631 16.0137C4.5 15.0275 4.5 13.4401 4.5 10.2653Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.5 6L5.22115 4.46154C5.78045 3.26838 6.06009 2.6718 6.62692 2.3359C7.19375 2 7.92084 2 9.375 2H14.625C16.0792 2 16.8062 2 17.3731 2.3359C17.9399 2.6718 18.2196 3.26838 18.7788 4.46154L19.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.5 9H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 22H12M20 22H12M12 22V19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DistributionIcon;
