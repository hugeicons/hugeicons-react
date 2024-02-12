import * as React from "react";
import type { SVGProps } from "react";

interface CourseIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CourseIcon = (props: CourseIconProps) => {
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
        <path d="M6.51379 2C5.20952 2.12853 4.33158 2.41902 3.6763 3.07554C2.50098 4.25309 2.50098 6.14832 2.50098 9.93879V13.9592C2.50098 17.7497 2.50098 19.6449 3.6763 20.8225C4.85163 22 6.74328 22 10.5266 22H12.533C16.3163 22 18.208 22 19.3833 20.8225C20.45 19.7538 20.5486 18.1056 20.5577 14.9766" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.5261 7.00013L11.5293 10.5001C12.0895 11.6101 12.7924 11.9005 14.5387 12.0001C15.9279 11.9657 16.7344 11.8021 17.4215 11.2041C17.8906 10.7958 18.1031 10.1812 18.2055 9.56889L18.5514 7.50013M21.0592 5.50013V10.5001M8.60078 4.93259C10.1876 3.61641 11.6021 2.90936 14.5348 2.13121C14.8651 2.04356 15.2145 2.04521 15.544 2.13585C18.1405 2.85008 19.5418 3.48376 21.42 4.89366C21.5005 4.95409 21.524 5.06556 21.4676 5.14878C20.8555 6.0512 19.4857 6.78153 16.1282 8.08399C15.4302 8.35477 14.6524 8.3485 13.9566 8.0721C10.3807 6.65155 8.73723 5.89271 8.53769 5.10312C8.52161 5.03948 8.55017 4.97457 8.60078 4.93259Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CourseIcon;
