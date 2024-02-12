import * as React from "react";
import type { SVGProps } from "react";

interface NoseIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const NoseIcon = (props: NoseIconProps) => {
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
        <path d="M7 17C9 17 9.5 21 12 21C14.5 21 15 17 17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.5 3C8.5 5.27896 7.13238 10.0177 5.73581 12.1124C4.16269 14.4718 2.78009 18.3771 5.73797 19.8041C7.19815 20.5085 9 19.0868 9 19.0868" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.5 3C15.5 5.27809 16.8676 10.0177 18.2642 12.1124C19.8373 14.4718 21.2199 18.3771 18.262 19.8041C16.8018 20.5085 15 19.0868 15 19.0868" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default NoseIcon;
