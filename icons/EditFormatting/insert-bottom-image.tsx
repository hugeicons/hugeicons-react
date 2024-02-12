import * as React from "react";
import type { SVGProps } from "react";

interface InsertBottomImageIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const InsertBottomImageIcon = (props: InsertBottomImageIconProps) => {
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
        <path d="M3 3H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 7H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 16C3 13.643 3 12.4645 3.73223 11.7322C4.46447 11 5.64298 11 8 11H16C18.357 11 19.5355 11 20.2678 11.7322C21 12.4645 21 13.643 21 16C21 18.357 21 19.5355 20.2678 20.2678C19.5355 21 18.357 21 16 21H8C5.64298 21 4.46447 21 3.73223 20.2678C3 19.5355 3 18.357 3 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default InsertBottomImageIcon;
