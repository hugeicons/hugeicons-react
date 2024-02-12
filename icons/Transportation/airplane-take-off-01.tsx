import * as React from "react";
import type { SVGProps } from "react";

interface AirplaneTakeOff01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AirplaneTakeOff01Icon = (props: AirplaneTakeOff01IconProps) => {
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
        <path d="M2 20H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.82496 12.1661C3.54996 11.9661 3.29996 11.7161 2.99998 10.8411C2.91861 10.6241 2.61108 9.53619 2.34998 8.54109C2.12972 7.7017 1.93347 6.93555 2.02497 6.74109C2.09998 6.54109 2.19997 6.39109 2.52497 6.19109C2.72496 6.06802 3.74996 5.81609 3.94996 5.76609C4.14996 5.71609 4.42496 5.69109 4.64996 5.76609C5.07496 5.84109 5.94996 7.11609 6.17496 7.26609C6.27495 7.36609 6.59996 7.657 6.97496 7.69109C7.24997 7.71609 7.52496 7.64109 7.82497 7.51609C8.09996 7.40151 13.525 4.76609 14.025 4.54109C18.1 2.84109 21.06 5.63609 21.51 6.23609C21.975 6.81609 22.075 6.99109 21.95 7.49109C21.7884 8.01609 21.35 8.11609 21.1 8.19109C20.8499 8.26609 17.4 9.19109 16.05 9.56609C15.7551 9.6621 15.6111 9.85492 15.575 9.89109C15.4 10.1411 14.605 11.8411 14.38 12.2161C14.225 12.6161 13.8 13.1161 13.25 13.3161C12.675 13.5161 11.675 13.7411 11.45 13.8161C11.225 13.8911 10.7 14.0411 10.525 13.9911C10.3 13.9411 10.085 13.7161 10.185 13.3661C10.285 13.0161 10.475 12.0411 10.5 11.8911C10.525 11.7411 10.775 11.1161 10.5 11.0911C10.45 11.0161 9.92496 11.2411 9.14996 11.4161C8.57419 11.5782 7.9712 11.7386 7.54996 11.8411C5.92496 12.3161 5.0449 12.4411 4.84996 12.4411C4.47496 12.4411 4.19996 12.3911 3.82496 12.1661Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default AirplaneTakeOff01Icon;
