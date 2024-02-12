import * as React from "react";
import type { SVGProps } from "react";

interface VimeoIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const VimeoIcon = (props: VimeoIconProps) => {
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
        <path d="M21.3459 4.65406C19.0372 2.82124 15.4614 5.64316 14.5961 7.12694C15.8974 7.43176 18.5 7.54313 16 12.0276C15 13.6885 12.7 15.8145 11.5 11.0311C10 5.05175 10 0.567257 2 7.54313C2.47556 8.4911 3.76645 8.5883 4.74116 8.17029C5.62781 7.79005 6.54267 7.94136 7 9.53652C8 13.0245 8.5 19.9866 12 19.9866C15.6345 20.4812 24.461 7.12711 21.3459 4.65406Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default VimeoIcon;
