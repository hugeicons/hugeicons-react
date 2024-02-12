import * as React from "react";
import type { SVGProps } from "react";

interface MoonCloudSnowIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MoonCloudSnowIcon = (props: MoonCloudSnowIconProps) => {
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
        <path d="M11.9978 17.9974L12.0022 18.0052M15.9955 16L16 16.0078M8 16L8.00449 16.0078M15.9955 19.9948L16 20.0026M8 19.9948L8.00449 20.0026M11.9978 21.9922L12.0022 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.4776 10.9867C17.485 10.9867 17.4925 10.9867 17.5 10.9867C19.9853 10.9867 22 12.9969 22 15.4767C22 17.2396 20.9817 18.7653 19.5 19.5M17.4776 10.9867C17.4924 10.8224 17.5 10.656 17.5 10.4878C17.5 7.45697 15.0376 5 12 5C9.12324 5 6.76233 7.20372 6.52042 10.0116M17.4776 10.9867C17.395 11.9014 16.9769 12.6883 16.5 13.4181M6.52042 10.0116C3.98398 10.2524 2 12.3839 2 14.9778C2 16.8244 3.0055 18.4367 4.5 19.2993M6.52042 10.0116C6.67826 9.99657 6.83823 9.98891 7 9.98891C8.12582 9.98891 9.16474 10.3602 10.0005 10.9867" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 5.13829C9.91652 4.70849 9.76249 4.28506 9.53351 3.88456C8.98606 2.92704 8.11203 2.27864 7.13552 2C7.28642 3.22635 6.71543 4.48154 5.58897 5.13829C4.46251 5.79504 3.10057 5.66681 2.1243 4.92166C1.87501 5.91497 1.99406 7.00354 2.54151 7.96107C3.48512 9.61151 5.39904 10.3436 7.13552 9.84664" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default MoonCloudSnowIcon;
