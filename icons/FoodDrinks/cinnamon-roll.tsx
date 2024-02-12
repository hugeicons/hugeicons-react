import * as React from "react";
import type { SVGProps } from "react";

interface CinnamonRollIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CinnamonRollIcon = (props: CinnamonRollIconProps) => {
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
        <path d="M22 9C22 12.3137 17.5228 15 12 15C6.47715 15 2 12.3137 2 9C2 5.68629 6.47715 3 12 3C17.5228 3 22 5.68629 22 9Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 6.85441C15 5.44094 17 7.71729 17 8.7817C17 11.9514 7 11.7874 7 7.88187C7 5.49755 9 3 12 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 9V15C22 18.3137 17.5228 21 12 21C6.47715 21 2 18.3137 2 15V9" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default CinnamonRollIcon;
