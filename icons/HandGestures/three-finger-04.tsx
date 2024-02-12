import * as React from "react";
import type { SVGProps } from "react";

interface ThreeFinger04IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ThreeFinger04Icon = (props: ThreeFinger04IconProps) => {
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
        <path d="M7.76597 13.9903V5.98282C7.76418 5.15277 8.39413 4.48216 9.22419 4.48216C10.053 4.48216 10.749 5.15727 10.749 5.98606M10.749 5.98606V10.4816M10.749 5.98606V3.99859C10.749 3.16979 11.4209 2.49792 12.2497 2.49792C13.0797 2.49792 13.7521 3.17177 13.7503 4.00183V10.475M16.7517 11.478V5.98606C16.7535 5.156 16.0811 4.48216 15.251 4.48216C14.4222 4.48216 13.7504 5.15403 13.7504 5.98282M16.7517 9.62564C17.5582 9.50466 19.5439 9.62564 19.7468 11.4827V15.1446C19.7468 16.5054 19.8504 18.1424 18.6843 19.5346C17.9848 20.5756 16.4907 21.1453 16.4907 21.1453C14.9508 21.6538 13.5567 21.4484 12.6442 21.4816C11.6086 21.5194 10.9 21.5229 10.0321 21.3303C10.0321 21.3303 8.05243 20.9925 6.79372 18.8653C5.82705 17.2316 3.31371 14.9309 4.61871 12.8526C5.46064 11.5118 7.12367 10.0449 7.76597 9.48386" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default ThreeFinger04Icon;
