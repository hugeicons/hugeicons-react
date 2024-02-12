import * as React from "react";
import type { SVGProps } from "react";

interface HandPointingLeft04IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const HandPointingLeft04Icon = (props: HandPointingLeft04IconProps) => {
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
        <path d="M10.515 10.7554L7.51076 10.7554M7.51076 10.7554H4.00456C3.17361 10.7554 2.5 10.083 2.5 9.25361C2.5 8.42421 3.17361 7.75184 4.00456 7.75184L9.469 7.75184M7.51076 10.7554L7.53762 11.8098C7.55574 12.5208 7.94402 13.1374 8.5156 13.4777M9.469 7.75184L14.0319 7.75184M9.469 7.75184L12.2288 5.1584C14.0964 3.58594 15.4578 4.41226 16.2142 4.99251L18.6516 6.60739C20.7191 7.8322 21.5 9.24956 21.5 10.4418V15.3226C21.5 17.5886 19.1177 19.7017 16.9342 19.7017L11.7343 19.7497C10.7241 19.7591 9.865 19.0164 9.73 18.0171L9.54069 16.4767M10.5448 13.7589H9.54069C9.16648 13.7589 8.81576 13.6564 8.5156 13.4777M8.5156 13.4777L8.5703 14.8133C8.59792 15.8977 9.48658 16.7625 10.5734 16.7625H11.5774" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default HandPointingLeft04Icon;
