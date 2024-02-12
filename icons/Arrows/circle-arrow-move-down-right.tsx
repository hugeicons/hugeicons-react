import * as React from "react";
import type { SVGProps } from "react";

interface CircleArrowMoveDownRightIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CircleArrowMoveDownRightIcon = (props: CircleArrowMoveDownRightIconProps) => {
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
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13.6314 12.5252C14.1397 13.1555 15.1725 13.9361 14.9886 14.3068M14.9886 14.3068C15.091 14.6847 14.0911 15.4318 13.6292 16.0017M14.9886 14.3068C12.9059 14.3521 11.6315 14.1001 10.4014 12.8753C9.12028 11.5996 8.90953 10.2057 9.01322 7.99707" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CircleArrowMoveDownRightIcon;
