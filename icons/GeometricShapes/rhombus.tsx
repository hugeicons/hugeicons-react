import * as React from "react";
import type { SVGProps } from "react";

interface RhombusIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const RhombusIcon = (props: RhombusIconProps) => {
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
        <path d="M6.91412 5.99584C9.31163 3.33195 10.5104 2 12 2C13.4896 2 14.6884 3.33195 17.0859 5.99584L17.4037 6.34903C19.8012 9.01292 21 10.3449 21 12C21 13.6551 19.8012 14.9871 17.4037 17.651L17.0859 18.0042C14.6884 20.6681 13.4896 22 12 22C10.5104 22 9.31163 20.6681 6.91412 18.0042L6.59626 17.651C4.19875 14.9871 3 13.6551 3 12C3 10.3449 4.19875 9.01292 6.59626 6.34903L6.91412 5.99584Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default RhombusIcon;
