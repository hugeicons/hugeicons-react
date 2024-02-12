import * as React from "react";
import type { SVGProps } from "react";

interface CrowdfundingIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CrowdfundingIcon = (props: CrowdfundingIconProps) => {
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
        <circle cx="12" cy="5" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="20" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="4" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 15C20 13.8954 18.8807 13 17.5 13H6.5C5.11929 13 4 13.8954 4 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 11L12 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default CrowdfundingIcon;
