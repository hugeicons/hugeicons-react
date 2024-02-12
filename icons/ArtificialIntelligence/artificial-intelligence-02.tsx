import * as React from "react";
import type { SVGProps } from "react";

interface ArtificialIntelligence02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ArtificialIntelligence02Icon = (props: ArtificialIntelligence02IconProps) => {
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
        <path d="M15.5 22V21.5C15.5 20.3954 16.4321 19.5005 17.4223 19.011C18.3846 18.5354 19.1943 17.7511 19.2965 16.8313L19.5 15L21.5 14L19 10.25C19 5.69365 15.3063 2 10.75 2C6.19365 2 2.5 5.69365 2.5 10.25C2.5 13.0379 3.88283 15.5028 6 16.9962M6 16.9962V22M6 16.9962C6.75065 17.5257 7.59362 17.9331 8.5 18.1895" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.3077 12L9.84703 7.47891C9.7552 7.19466 9.47344 7 9.15385 7C8.83425 7 8.55249 7.19466 8.46066 7.47891L7 12M14 7V12M7.53846 10.5H10.7692" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ArtificialIntelligence02Icon;
