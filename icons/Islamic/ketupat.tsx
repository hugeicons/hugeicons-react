import * as React from "react";
import type { SVGProps } from "react";

interface KetupatIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const KetupatIcon = (props: KetupatIconProps) => {
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
        <path d="M17.7748 9.6488L15.8492 7.72321C14.0338 5.90774 13.126 5 11.998 5C10.8701 5 9.96232 5.90774 8.14685 7.72321L6.22125 9.6488C4.40578 11.4643 3.49805 12.372 3.49805 13.5C3.49805 14.628 4.40578 15.5357 6.22125 17.3512L8.14685 19.2768C9.96232 21.0923 10.8701 22 11.998 22C13.126 22 14.0338 21.0923 15.8492 19.2768L17.7748 17.3512C19.5903 15.5357 20.498 14.628 20.498 13.5C20.498 12.372 19.5903 11.4643 17.7748 9.6488Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.748 8.75L11.998 13.5M11.998 13.5L7.24805 18.25M11.998 13.5L7.24805 8.75M11.998 13.5L16.748 18.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 2C12.6 2.24 12 4.3 12 5C11.8333 4.4 11 3.2 9 3.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default KetupatIcon;
