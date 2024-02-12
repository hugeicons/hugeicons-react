import * as React from "react";
import type { SVGProps } from "react";

interface HotAirBalloonIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const HotAirBalloonIcon = (props: HotAirBalloonIconProps) => {
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
        <path d="M20 8.93333C20 14 14.4615 18 12 18C9.53846 18 4 14 4 8.93333C4 5.10416 7.58172 2 12 2C16.4183 2 20 5.10416 20 8.93333Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15 8.93333C15 14 12.9231 18 12 18C11.0769 18 9 14 9 8.93333C9 5.10416 10.3431 2 12 2C13.6569 2 15 5.10416 15 8.93333Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 20C9 19.535 9 19.3025 9.05111 19.1118C9.18981 18.5941 9.59413 18.1898 10.1118 18.0511C10.3025 18 10.535 18 11 18H13C13.465 18 13.6975 18 13.8882 18.0511C14.4059 18.1898 14.8102 18.5941 14.9489 19.1118C15 19.3025 15 19.535 15 20C15 20.465 15 20.6975 14.9489 20.8882C14.8102 21.4059 14.4059 21.8102 13.8882 21.9489C13.6975 22 13.465 22 13 22H11C10.535 22 10.3025 22 10.1118 21.9489C9.59413 21.8102 9.18981 21.4059 9.05111 20.8882C9 20.6975 9 20.465 9 20Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default HotAirBalloonIcon;
