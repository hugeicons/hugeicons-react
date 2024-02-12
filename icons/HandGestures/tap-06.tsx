import * as React from "react";
import type { SVGProps } from "react";

interface Tap06IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Tap06Icon = (props: Tap06IconProps) => {
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
        <path d="M7.50903 14.3526V6.09638C7.50903 5.27475 8.11833 4.50586 8.9415 4.50586C9.76467 4.50586 10.5185 5.15854 10.5185 5.98017V10.2612M10.5185 10.2612L10.51 11.437M10.5185 10.2612C11.0807 8.14404 13.6707 8.95626 13.5121 10.6167C13.5093 10.6461 13.5121 11.355 13.5121 11.355M13.5121 11.355V12.4956M13.5121 11.355C13.7954 9.44431 16.9345 9.39199 16.5342 12.3053M16.5342 12.3053L16.5114 12.9935M16.5342 12.3053C17.0034 10.2952 19.5692 10.7279 19.5011 12.5806V16.2679C19.4984 17.8445 19.1904 18.5983 18.3763 19.547C18.2164 19.7333 18.0608 19.926 17.9442 20.142C17.5161 20.9353 17.7124 21.1529 17.6412 21.9926M7.50903 10.4132C6.18917 11.607 5.30084 12.6969 5.03476 13.0223C4.14482 14.3745 4.37105 15.26 5.63576 17.0622C6.57695 18.4033 7.44153 19.3674 7.50766 19.4422C8.18074 20.2036 8.12126 20.7057 8.12126 22.0006" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.0338 5.99951C13.0338 3.79037 11.2387 1.99951 9.02445 1.99951C6.81017 1.99951 5.01514 3.79037 5.01514 5.99951" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Tap06Icon;
