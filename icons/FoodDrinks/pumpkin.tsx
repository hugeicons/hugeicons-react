import * as React from "react";
import type { SVGProps } from "react";

interface PumpkinIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PumpkinIcon = (props: PumpkinIconProps) => {
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
        <path d="M16 18C16 20 14 22 12 22C10 22 8 20 8 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 8C14.4012 6.8044 13.2819 6 12 6C10.7181 6 9.59883 6.8044 9 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15.4118 19.4077C19.6471 21.8019 22 16.4063 22 12.7038C22 9.00141 19.7754 6 17.0313 6C16.0946 6 14.9412 6.47885 14 7.43654" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8.58824 19.4077C4.35294 21.8019 2 16.4063 2 12.7038C2 9.00141 4.22456 6 6.9687 6C7.90542 6 9.05882 6.47885 10 7.43654" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 6C12 4.66667 12.6 2 15 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default PumpkinIcon;
