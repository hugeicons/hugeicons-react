import * as React from "react";
import type { SVGProps } from "react";

interface TapeMeasureIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TapeMeasureIcon = (props: TapeMeasureIconProps) => {
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
        <path d="M5 9.97873C5 11.095 6.79086 12 9 12V9.97873C9 8.98454 9 8.48745 8.60252 8.18419C8.20504 7.88092 7.811 7.99435 7.02292 8.22121C5.81469 8.56902 5 9.2258 5 9.97873Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M16 8.5C16 10.433 12.866 12 9 12C5.13401 12 2 10.433 2 8.5C2 6.567 5.13401 5 9 5C12.866 5 16 6.567 16 8.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 9V15.6667C2 17.5076 5.13401 19 9 19H20C20.9428 19 21.4142 19 21.7071 18.7071C22 18.4142 22 17.9428 22 17V14C22 13.0572 22 12.5858 21.7071 12.2929C21.4142 12 20.9428 12 20 12H9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 19V17M14 19V17M10 19V17M6 18.5V16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default TapeMeasureIcon;
