import * as React from "react";
import type { SVGProps } from "react";

interface InsertCenterImageIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const InsertCenterImageIcon = (props: InsertCenterImageIconProps) => {
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
        <path d="M3 21H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 12C3 9.64298 3 8.46447 3.73223 7.73223C4.46447 7 5.64298 7 8 7H16C18.357 7 19.5355 7 20.2678 7.73223C21 8.46447 21 9.64298 21 12C21 14.357 21 15.5355 20.2678 16.2678C19.5355 17 18.357 17 16 17H8C5.64298 17 4.46447 17 3.73223 16.2678C3 15.5355 3 14.357 3 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default InsertCenterImageIcon;
