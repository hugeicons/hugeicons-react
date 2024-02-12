import * as React from "react";
import type { SVGProps } from "react";

interface ClipIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ClipIcon = (props: ClipIconProps) => {
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
        <path d="M4 22H7.14444C7.51533 22 7.66655 21.6672 7.73659 21.3171C7.89059 20.5471 8.49844 20 9.2 20C9.90156 20 10.5094 20.5471 10.6634 21.3171C10.7334 21.6672 10.8847 22 11.2556 22H12.7444C13.1153 22 13.2666 21.6672 13.3366 21.3171C13.4906 20.5471 14.0984 20 14.8 20C15.5016 20 16.1094 20.5471 16.2634 21.3171C16.3334 21.6672 16.4847 22 16.8556 22H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.77232 20C8.77232 20 9.62267 11.8193 9.93709 9.47913C10.208 7.46284 6.43388 4.71926 8.76226 3.09378C10.8515 1.63526 13.1483 1.63551 15.2376 3.09392C17.5661 4.71933 13.7927 7.46286 14.0636 9.47913C14.378 11.8193 15.2283 20 15.2283 20" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M5 22L3.67748 17.1633C3.01417 14.3231 2.68252 12.903 3.41535 11.9515C4.14818 11 5.57361 11 8.42448 11H15.5755C18.4264 11 19.8518 11 20.5847 11.9515C21.3175 12.903 20.9858 14.3231 20.3225 17.1633L19 22" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ClipIcon;
