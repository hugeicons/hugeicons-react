import * as React from "react";
import type { SVGProps } from "react";

interface MedalFirstPlaceIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MedalFirstPlaceIcon = (props: MedalFirstPlaceIconProps) => {
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
        <path d="M12.5 17.9994V12.9481C12.5 12.3736 12.5 12.0863 12.2696 12.0149C11.7631 11.8577 11 12.999 11 12.999M12.5 17.9994H11M12.5 17.9994H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.5601 2L11 7.89783M18 2L15.1786 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.4399 2L12 5.59405M6 2L8.82144 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default MedalFirstPlaceIcon;
