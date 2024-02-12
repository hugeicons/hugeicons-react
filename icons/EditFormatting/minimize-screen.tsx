import * as React from "react";
import type { SVGProps } from "react";

interface MinimizeScreenIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MinimizeScreenIcon = (props: MinimizeScreenIconProps) => {
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
        <path d="M2 10.0021C2.02895 6.58807 2.21848 4.70599 3.45963 3.46485C4.92448 2 7.28212 2 11.9974 2C16.7127 2 19.0703 2 20.5352 3.46485C22 4.9297 22 7.28733 22 12.0026C22 16.7179 22 19.0755 20.5352 20.5404C19.294 21.7815 17.4119 21.9711 13.9979 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.99871 13C3.82845 13.0351 3.13074 13.1652 2.64796 13.648C2.16519 14.1307 2.03507 14.8285 2 15.9987M8.00129 13C9.17155 13.0351 9.86926 13.1652 10.352 13.648C10.8348 14.1307 10.9649 14.8285 11 15.9987M11 19.0013C10.9649 20.1715 10.8348 20.8693 10.352 21.352C9.86926 21.8348 9.17155 21.9649 8.00129 22M4.99872 22C3.82846 21.9649 3.13074 21.8348 2.64796 21.352C2.16519 20.8693 2.03507 20.1715 2 19.0013" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.4127 11.0064L13.5096 10.9395C13.0781 10.9296 12.7326 10.5952 12.7277 10.1828L12.6965 7.53881M20.0282 3.76643L13.2808 10.3674" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default MinimizeScreenIcon;
