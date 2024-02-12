import * as React from "react";
import type { SVGProps } from "react";

interface ArrangeByNumbers91IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ArrangeByNumbers91Icon = (props: ArrangeByNumbers91IconProps) => {
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
        <path d="M7 21.0003V14.9491C7 14.3746 7 14.0873 6.76959 14.0158C6.26306 13.8587 5.5 15 5.5 15M7 21.0003H5.5M7 21.0003H8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 6.50098V4.75098C9 3.92602 9 3.51354 8.70711 3.25726C8.41421 3.00098 7.94281 3.00098 7 3.00098C6.05719 3.00098 5.58579 3.00098 5.29289 3.25726C5 3.51354 5 3.92602 5 4.75098C5 5.57593 5 5.98841 5.29289 6.2447C5.58579 6.50098 6.05719 6.50098 7 6.50098H9ZM9 6.50098V7.37598C9 8.61341 9 9.23213 8.56066 9.61655C8.12132 10.001 7.41421 10.001 6 10.001H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.5 20V4M16.5 20C15.7998 20 14.4915 18.0057 14 17.5M16.5 20C17.2002 20 18.5085 18.0057 19 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ArrangeByNumbers91Icon;
