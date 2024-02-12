import * as React from "react";
import type { SVGProps } from "react";

interface MachineRobotIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MachineRobotIcon = (props: MachineRobotIconProps) => {
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
        <path d="M17 13V8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8V13C7 14.8692 7 15.8038 7.40192 16.5C7.66523 16.9561 8.04394 17.3348 8.5 17.5981C9.19615 18 10.1308 18 12 18C13.8692 18 14.8038 18 15.5 17.5981C15.9561 17.3348 16.3348 16.9561 16.5981 16.5C17 15.8038 17 14.8692 17 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M18 21C18 19.8954 18.8954 19 20 19C21.1046 19 22 19.8954 22 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 21C2 19.8954 2.89543 19 4 19C5.10457 19 6 19.8954 6 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.992 7.5H14.001" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 7.5H10.009" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 19V15C20 13.1144 20 12.1716 19.4142 11.5858C18.8284 11 17.8856 11 16 11H8C6.11438 11 5.17157 11 4.58579 11.5858C4 12.1716 4 13.1144 4 15V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default MachineRobotIcon;
