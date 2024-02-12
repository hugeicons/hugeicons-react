import * as React from "react";
import type { SVGProps } from "react";

interface HeadsetOffIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const HeadsetOffIcon = (props: HeadsetOffIconProps) => {
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
        <path d="M2 2.00391L22 21.959" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 13.9769C21 11.7727 19.2091 9.98584 17 9.98584C16.2532 9.98584 15.602 10.3942 15.2585 10.9995M15 14.9746V15.9724C15 17.0745 15.8954 17.9679 17 17.9679C17.309 17.9679 17.6098 17.9329 17.8987 17.8668" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.90819 10.1367C4.22974 10.6108 3 12.1507 3 13.9773C3 16.1814 4.79086 17.9683 7 17.9683C8.10457 17.9683 9 17.0748 9 15.9728V13.2216" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2.99116 13.9908C2.99116 12.9805 2.35632 8.16457 5.16685 5.15696M21.0138 16.7064V11.1023C21.0138 10.1124 20.9066 9.11872 20.5958 8.17871C20.3281 7.36921 19.9888 6.6189 19.3344 5.69402C15.552 0.905214 10.3682 1.58866 7.47429 3.22258M20.3065 20.2694C19.9571 20.8904 19.391 21.3331 18.7069 21.6168C18.0006 21.9096 17.4337 21.9424 16.5713 21.9902C14.9707 21.9902 13.2333 22.0094 12.0548 21.9902" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default HeadsetOffIcon;
