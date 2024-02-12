import * as React from "react";
import type { SVGProps } from "react";

interface Saturn01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Saturn01Icon = (props: Saturn01IconProps) => {
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
        <path d="M5.63604 18.364C4.00736 16.7353 3 14.4853 3 12C3 7.02944 7.02944 3 12 3C14.4853 3 16.7353 4.00736 18.364 5.63604M20.2941 8.5C20.7487 9.57589 21 10.7586 21 12C21 16.9706 16.9706 21 12 21C10.7586 21 9.57589 20.7487 8.5 20.2941" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.8292 3.82166C18.5323 2.13953 20.7205 1.51952 21.6005 2.39804C23.1408 3.93558 20.0911 9.48095 14.7889 14.784C9.48663 20.087 3.93971 23.1395 2.39946 21.602C1.52414 20.7282 2.13121 18.56 3.79165 15.8775" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Saturn01Icon;
