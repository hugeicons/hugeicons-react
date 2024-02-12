import * as React from "react";
import type { SVGProps } from "react";

interface YogaBallIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const YogaBallIcon = (props: YogaBallIconProps) => {
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
        <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18.8527 4.71739C18.0384 9.42192 13.9368 13 8.99957 13C6.34739 13 3.93635 11.9675 2.14648 10.2825M21.8096 10.0501C19.6928 14.7377 14.9772 18 9.49957 18C7.13533 18 4.91304 17.3922 2.98041 16.3244M3.65427 6.48834C4.84805 7.43477 6.35781 7.99996 7.99957 7.99996C11.3811 7.99996 14.2027 5.60217 14.8567 2.41406" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default YogaBallIcon;
