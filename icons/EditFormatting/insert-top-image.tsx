import * as React from "react";
import type { SVGProps } from "react";

interface InsertTopImageIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const InsertTopImageIcon = (props: InsertTopImageIconProps) => {
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
        <path d="M3 17H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 21H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 8C3 5.64298 3 4.46447 3.73223 3.73223C4.46447 3 5.64298 3 8 3H16C18.357 3 19.5355 3 20.2678 3.73223C21 4.46447 21 5.64298 21 8C21 10.357 21 11.5355 20.2678 12.2678C19.5355 13 18.357 13 16 13H8C5.64298 13 4.46447 13 3.73223 12.2678C3 11.5355 3 10.357 3 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default InsertTopImageIcon;
