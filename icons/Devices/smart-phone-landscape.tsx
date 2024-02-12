import * as React from "react";
import type { SVGProps } from "react";

interface SmartPhoneLandscapeIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SmartPhoneLandscapeIcon = (props: SmartPhoneLandscapeIconProps) => {
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
        <path d="M9 19C5.70017 19 4.05025 19 3.02513 17.9749C2 16.9497 2 15.2998 2 12C2 8.70017 2 7.05025 3.02513 6.02513C4.05025 5 5.70017 5 9 5L15 5C18.2998 5 19.9497 5 20.9749 6.02513C22 7.05025 22 8.70017 22 12C22 15.2998 22 16.9497 20.9749 17.9749C19.9497 19 18.2998 19 15 19L9 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19 13L19 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 15L2.53402 14.911C3.74122 14.7098 4.31845 14.6028 4.66642 14.1724C5 13.7599 5 13.1732 5 12C5 10.7761 4.98934 10.1892 4.62204 9.77519C4.26993 9.37832 3.69129 9.28188 2.53402 9.089L2 9" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SmartPhoneLandscapeIcon;
