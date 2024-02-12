import * as React from "react";
import type { SVGProps } from "react";

interface MedalSecondPlaceIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MedalSecondPlaceIcon = (props: MedalSecondPlaceIconProps) => {
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
        <path d="M5 15C5 11.134 8.02208 8 11.75 8H12.25C15.9779 8 19 11.134 19 15C19 18.866 15.9779 22 12.25 22H11.75C8.02208 22 5 18.866 5 15Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10.5 13.1179C10.5804 12.3326 11.1076 12 11.6576 12H12.3239C12.8738 12 13.401 12.3326 13.4814 13.1179C13.5063 13.3608 13.5063 13.6392 13.4814 13.8821C13.4325 14.3602 12.8543 14.9086 12.8543 14.9086L12 15.5C12 15.5 10.5 16.5 10.5 17.5C10.5 18.0394 10.9373 18 11.4766 18H13.4814" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M13.5601 2L11 7.89783M18 2L15.1786 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.4399 2L12 5.59405M6 2L8.82144 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default MedalSecondPlaceIcon;
