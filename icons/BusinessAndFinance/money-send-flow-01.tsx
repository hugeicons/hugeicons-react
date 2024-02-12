import * as React from "react";
import type { SVGProps } from "react";

interface MoneySendFlow01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MoneySendFlow01Icon = (props: MoneySendFlow01IconProps) => {
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
        <path d="M12 22V18M8 20L8 18M16 20V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19 17.5C19.7745 17.3341 20.3588 17.0571 20.8284 16.5949C22 15.4418 22 13.5859 22 9.87402C22 6.16217 22 4.30625 20.8284 3.15312C19.6569 2 17.7712 2 14 2H10C6.22876 2 4.34315 2 3.17157 3.15312C2 4.30625 2 6.16217 2 9.87402C2 13.5859 2 15.4418 3.17157 16.5949C3.64118 17.0571 4.2255 17.3341 5 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18.5 10H18.491" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.50996 10H5.50098" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.5 10C14.5 8.61929 13.3807 7.5 12 7.5C10.6193 7.5 9.5 8.61929 9.5 10C9.5 11.3807 10.6193 12.5 12 12.5C13.3807 12.5 14.5 11.3807 14.5 10Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default MoneySendFlow01Icon;
