import * as React from "react";
import type { SVGProps } from "react";

interface ArtificialIntelligence01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ArtificialIntelligence01Icon = (props: ArtificialIntelligence01IconProps) => {
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
        <path d="M16 21.9996V21.4996C16 20.395 16.9321 19.5001 17.9223 19.0106C18.8846 18.5349 19.6943 17.7507 19.7965 16.8309L20 14.9996L22 13.9996L19.5 10.2496C19.5 5.94604 16.2049 2.41212 12 2.0332M6.5 16.9958V21.9996M6.5 16.9958C5.46656 16.2668 4.60808 15.3064 4 14.1899M6.5 16.9958C7.25065 17.5253 8.09362 17.9327 9 18.189" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 4H6C5.05719 4 4.58579 4 4.29289 4.29289C4 4.58579 4 5.05719 4 6V8C4 8.94281 4 9.41421 4.29289 9.70711C4.58579 10 5.05719 10 6 10H8C8.94281 10 9.41421 10 9.70711 9.70711C10 9.41421 10 8.94281 10 8V6C10 5.05719 10 4.58579 9.70711 4.29289C9.41421 4 8.94281 4 8 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.5 10V12M8.5 10V12M5.5 2V4M8.5 2V4M4 5.5H2M4 8.5H2M12 5.5H10M12 8.5H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ArtificialIntelligence01Icon;
