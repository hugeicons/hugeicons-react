import * as React from "react";
import type { SVGProps } from "react";

interface OrganicFoodIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const OrganicFoodIcon = (props: OrganicFoodIconProps) => {
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
        <path d="M10 9.25524C7.60631 7.95835 5.08056 5.71428 3 2M11.6155 4.41901C9.5805 3.0835 7.09742 3.64165 6.06938 5.66567C5.04134 7.68969 5.85764 10.4131 7.89263 11.7486C9.73497 12.9577 13.7672 14.2079 17 10.745C13.9706 9.45488 13.6505 5.75451 11.6155 4.41901Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 11C3.36093 11.4709 3 12.0054 3 12.572C3 14.4652 7.02944 16 12 16C16.9706 16 21 14.4652 21 12.572C21 12.0054 20.6391 11.4709 20 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M21 13C21 16.5766 18.4936 19.7147 15.7951 21.4822C15.2402 21.8457 14.5804 22 13.9171 22H10.0829C9.41959 22 8.75976 21.8457 8.20486 21.4822C5.5064 19.7147 3 16.5766 3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default OrganicFoodIcon;
