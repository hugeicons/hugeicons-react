import * as React from "react";
import type { SVGProps } from "react";

interface DroneIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DroneIcon = (props: DroneIconProps) => {
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
        <path d="M12 7C6.47715 7 2 7.89543 2 9C2 9.80571 4.38215 10.5001 7.81468 10.8169C8.43288 10.874 8.85702 11.4721 8.92296 12.0894C9.09436 13.6942 10.384 15 12 15C13.616 15 14.9056 13.6942 15.077 12.0894C15.143 11.4721 15.5671 10.874 16.1853 10.8169C19.6179 10.5001 22 9.80571 22 9C22 7.89543 17.5228 7 12 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M11.9998 12H12.0088" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 3H6M8 3H6M6 3V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 3H18M20 3H18M18 3V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 21V19.5C5 16.7386 7.23858 14.5 10 14.5M19 21V19.5C19 16.7386 16.7614 14.5 14 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DroneIcon;
