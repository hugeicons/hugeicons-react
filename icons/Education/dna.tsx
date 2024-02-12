import * as React from "react";
import type { SVGProps } from "react";

interface DnaIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DnaIcon = (props: DnaIconProps) => {
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
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22.0004 8.44332C20.2212 10.2226 17.3364 10.2226 15.5571 8.44332C13.7778 6.66405 13.7778 3.77927 15.5571 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 15.5566C3.77927 13.7773 6.66405 13.7773 8.44332 15.5566C10.2226 17.3359 10.2226 20.2207 8.44332 21.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default DnaIcon;
