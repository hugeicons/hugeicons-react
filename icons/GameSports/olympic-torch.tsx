import * as React from "react";
import type { SVGProps } from "react";

interface OlympicTorchIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const OlympicTorchIcon = (props: OlympicTorchIconProps) => {
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
        <path d="M10 8.94648C10.0112 7.71996 10.5211 6.32069 11.6575 5.3729C14.5106 2.99353 21.2591 6.95603 20.8207 2C24.4804 7.64147 18.4776 7.81928 18.2152 9.83766C18.0664 10.9826 20.1591 11.6114 21.3687 10.6027C21.1245 11.4521 19.5 14.8057 15 13.8206" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.95445 12.0276C7.83074 10.9039 8.01032 7 8.01032 7L17 15.9897C17 15.9897 13.0961 16.1678 11.9724 15.0441" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.14822 12L2.24774 19.983C1.87554 20.4866 1.92775 21.1867 2.37054 21.6295C2.81333 22.0722 3.51343 22.1245 4.01701 21.7523L12 15.8518" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 10L14 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default OlympicTorchIcon;
