import * as React from "react";
import type { SVGProps } from "react";

interface HighHeels02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const HighHeels02Icon = (props: HighHeels02IconProps) => {
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
        <path d="M20.94 20C20.7001 19.5608 20.5461 18.7733 20.7747 17.9828C21.072 16.9548 21.2166 16.6616 20.2832 16.1146L18.8943 15.3006C18.0159 14.7858 17.8318 14.9376 17.1901 15.7146C16.4066 16.6636 15.0099 17.7544 13 18.2276" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 7V5.2C2 4.2072 2.17267 4 3 4H8C8.9076 4 9 4.55496 9 5.5C9 6.44504 8.9076 7 8 7H2ZM2 7V12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M2 12H3C5.45356 12 6.68034 12 7.73607 12.5279C8.7918 13.0557 9.52786 14.0372 11 16C13.9754 19.9672 17.4727 20 22 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 12L3.46941 19.8369C3.48715 19.9315 3.56974 20 3.66599 20H4.3C4.41046 20 4.5004 19.914 4.50314 19.8036C4.52912 18.7574 4.7698 13.8381 7 12.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default HighHeels02Icon;
