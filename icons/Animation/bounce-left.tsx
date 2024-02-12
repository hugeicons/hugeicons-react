import * as React from "react";
import type { SVGProps } from "react";

interface BounceLeftIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BounceLeftIcon = (props: BounceLeftIconProps) => {
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
        <path d="M9 10C11.1153 13.01 12.1055 17.1528 12.752 20.086C12.8835 20.6824 12.9492 20.9806 13.0872 20.9991C13.2252 21.0177 13.3662 20.7339 13.6482 20.1662C14.9939 17.4579 17.7827 15.062 20 17.1079" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 8 3)" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BounceLeftIcon;
