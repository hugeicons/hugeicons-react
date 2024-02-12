import * as React from "react";
import type { SVGProps } from "react";

interface AirplaneLanding01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AirplaneLanding01Icon = (props: AirplaneLanding01IconProps) => {
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
        <path d="M6.00098 19.998H22.001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.697 4.04178C3.07909 4.2103 3.007 4.91778 2.827 5.51778C2.67653 6.08204 2.35861 7.33023 2.14236 8.18298C1.981 8.93778 1.9594 9.23778 2.0554 9.71778C2.281 10.6178 3.061 10.9718 4.741 11.4398C5.58568 11.6558 6.181 11.837 7.081 12.077C7.23548 12.1264 7.71553 12.2475 8.101 12.3518C8.461 12.4778 8.761 12.4418 8.6938 12.7178C8.64698 12.8275 8.1034 13.4378 7.5994 13.9778C7.261 14.3978 7.033 14.4997 7.033 14.8178C7.033 14.8178 7.021 15.2978 7.69376 15.3578C7.801 15.4178 9.241 15.7778 9.781 15.9338C10.501 16.1138 11.041 15.8978 11.485 15.5978L13.681 14.1578C14.161 13.9418 14.281 14.033 14.821 14.177L19.621 15.4778C20.461 15.7778 21.181 15.0578 20.9698 14.2178C20.701 12.7178 20.221 11.8178 19.441 10.8578C18.181 9.35778 16.6448 8.77257 15.541 8.57778C15.0373 8.48889 13.1435 8.33911 11.341 8.20578C9.49344 8.06912 7.74174 7.94889 7.681 7.85778C6.361 7.55778 6.76899 5.61978 6.205 4.77378C5.981 4.43778 5.581 4.37778 4.981 4.19778C4.4725 4.06761 4.09567 3.93305 3.697 4.04178Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default AirplaneLanding01Icon;
