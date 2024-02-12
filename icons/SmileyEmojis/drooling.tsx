import * as React from "react";
import type { SVGProps } from "react";

interface DroolingIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DroolingIcon = (props: DroolingIconProps) => {
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
        <path d="M10 8.5H8.70711C8.25435 8.5 7.82014 8.67986 7.5 9M14 8.5H15.2929C15.7456 8.5 16.1799 8.67986 16.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 21.1679C14.7751 21.7031 13.4222 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 14.4292 21.1338 16.6562 19.6934 18.3888" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 16C16.9444 16.4782 20.5737 17.4805 19.9229 20.5384C19.5873 22.0505 17.8294 22.33 16.875 21.6496C14.5772 20.0116 16.875 18.4 15 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DroolingIcon;
