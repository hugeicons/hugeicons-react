import * as React from "react";
import type { SVGProps } from "react";

interface BeltIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BeltIcon = (props: BeltIconProps) => {
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
        <path d="M8.9751 17.9655C12.4619 17.5232 16 16.3318 16 12C16 7.66817 12.4619 6.47683 8.9751 6.0345C6.62063 5.73582 6 7.41975 6 9.41154V14.5885C6 16.5803 6.62063 18.2642 8.9751 17.9655Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 7.5H6M2 16.5H6M14 7.5H22M14 16.5L22 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 12H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19.9998 12H20.0088" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BeltIcon;
