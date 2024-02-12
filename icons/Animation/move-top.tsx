import * as React from "react";
import type { SVGProps } from "react";

interface MoveTopIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MoveTopIcon = (props: MoveTopIconProps) => {
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
        <circle cx="3" cy="3" r="3" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 15 22)" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12.0001 2L12.0001 12M12.0001 2C11.4381 2 11.0109 2.4381 10.1564 3.3143L8.5 4.97057M12.0001 2C12.5622 2 12.9894 2.4381 13.8439 3.3143L15.5 4.97044" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default MoveTopIcon;
