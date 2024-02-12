import * as React from "react";
import type { SVGProps } from "react";

interface DoorLockIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DoorLockIcon = (props: DoorLockIconProps) => {
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
        <path d="M3 22H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 22V6C4 2.69067 4.78933 2 8.57143 2H15.4286C19.2107 2 20 2.69067 20 6V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.92 11.759V9.85411C13.92 8.83227 13.0604 8.00391 12 8.00391C10.9396 8.00391 10.08 8.83227 10.08 9.85411V11.759M15 14.0841C15 15.695 13.6462 17.0039 12 17.0039C10.3538 17.0039 9 15.695 9 14.0841C9 12.3739 10.3538 11.0738 12 11.0738C13.6462 11.0738 15 12.3739 15 14.0841Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default DoorLockIcon;
