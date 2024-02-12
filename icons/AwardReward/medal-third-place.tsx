import * as React from "react";
import type { SVGProps } from "react";

interface MedalThirdPlaceIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MedalThirdPlaceIcon = (props: MedalThirdPlaceIconProps) => {
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
        <path d="M10.5 13.1179C10.5804 12.3326 11.1075 12 11.6575 12H12.3238C12.8738 12 13.401 12.3326 13.4814 13.1179C13.5062 13.3608 13.5062 13.6392 13.4814 13.8821C13.4151 14.5297 12.9713 15 12.4904 15M10.5 16.8821C10.5804 17.6674 11.1075 18 11.6575 18L12.3238 18C12.8738 18 13.401 17.6674 13.4814 16.8821C13.5062 16.6392 13.5062 16.3608 13.4814 16.1179C13.4151 15.4703 12.9713 15 12.4904 15M12.4904 15H12.431" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M13.5601 2L11 7.89783M18 2L15.1786 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.4399 2L12 5.59405M6 2L8.82144 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default MedalThirdPlaceIcon;
