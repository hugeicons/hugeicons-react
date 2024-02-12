import * as React from "react";
import type { SVGProps } from "react";

interface FryIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FryIcon = (props: FryIconProps) => {
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
        <path d="M22 9.5C22 13.6421 18.6421 17 14.5 17C10.3579 17 7 13.6421 7 9.5C7 5.35786 10.3579 2 14.5 2C18.6421 2 22 5.35786 22 9.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M19 9C19 11.2091 17.2091 13 15 13C12.7909 13 11 11.2091 11 9C11 6.79086 12.7909 5 15 5C17.2091 5 19 6.79086 19 9Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15.0078 9L14.9988 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 22L9 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FryIcon;
