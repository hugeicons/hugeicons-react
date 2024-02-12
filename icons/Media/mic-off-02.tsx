import * as React from "react";
import type { SVGProps } from "react";

interface MicOff02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MicOff02Icon = (props: MicOff02IconProps) => {
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
        <path d="M2 2L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 11C4 15.4183 7.58172 19 12 19M12 19C13.9545 19 15.7454 18.2991 17.1348 17.1348M12 19V22M12 22H15M12 22H9M20 11C20 12.6514 19.4996 14.1859 18.6422 15.4603" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 6.98V11C7 13.7614 9.23858 16 12 16C13.1354 16 14.1647 15.6096 15.004 14.972M16.4387 13.244C16.7973 12.5545 17 11.8309 17 11V6.98C17 4.21858 14.7614 2 12 2C10.1312 2 8.53009 2.96527 7.672 4.484" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default MicOff02Icon;
