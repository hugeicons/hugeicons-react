import * as React from "react";
import type { SVGProps } from "react";

interface TouchInteraction01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TouchInteraction01Icon = (props: TouchInteraction01IconProps) => {
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
        <path d="M7 7.99678H6.17647C4.67907 7.99678 3.93037 7.99678 3.46518 7.55782C3 7.11886 3 6.41236 3 4.99937C3 3.58638 3 2.87988 3.46518 2.44091C3.93037 2.00195 4.67907 2.00195 6.17647 2.00195H17.8235C19.3209 2.00195 20.0696 2.00195 20.5348 2.44091C21 2.87988 21 3.58638 21 4.99937C21 6.41236 21 7.11886 20.5348 7.55782C20.0696 7.99678 19.3209 7.99678 17.8235 7.99678H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.0296 21.9923C17.9799 20.2784 18.1199 20.0528 18.2514 19.6716C18.3828 19.2903 19.1984 17.9367 19.5236 16.9543C20.576 13.7762 19.7712 13.2388 18.5104 12.2733C17.0658 11.1671 14.6208 10.6042 13.0946 10.7258V6.63564C13.0946 5.77305 12.2692 5.02246 11.3432 5.02246C10.4172 5.02246 9.59704 5.77305 9.59704 6.63564V14.3876L7.62568 12.7102C7.0938 12.1728 6.24275 12.222 5.62664 12.6287C5.43494 12.7553 5.27952 12.9329 5.18075 13.1403C4.90045 13.7288 4.98135 14.3952 5.42292 14.9406L6.54372 16.3853M9.52799 21.9981V21.0516C9.60063 19.8892 8.54484 18.9558 7.42153 17.517M7.42153 17.517C7.34059 17.4133 7.49821 17.6139 7.42153 17.517ZM7.42153 17.517C7.08118 17.0866 6.81124 16.7089 6.54372 16.3853M7.42153 17.517L8.52852 18.8708M7.42153 17.517L6.54372 16.3853" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default TouchInteraction01Icon;
