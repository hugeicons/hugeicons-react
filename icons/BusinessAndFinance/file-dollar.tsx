import * as React from "react";
import type { SVGProps } from "react";

interface FileDollarIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FileDollarIcon = (props: FileDollarIconProps) => {
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
        <path d="M20.0005 9.90909V7.81818C20.0005 6.12494 20.0005 5.27832 19.7325 4.60214C19.3017 3.5151 18.3907 2.65765 17.2357 2.2522C16.5172 2 15.6177 2 13.8186 2C10.6703 2 9.09612 2 7.83885 2.44135C5.81762 3.15088 4.2233 4.65142 3.46942 6.55375C3.00049 7.73706 3.00049 9.21865 3.00049 12.1818V14.7273C3.00049 17.7966 3.00049 19.3313 3.84819 20.3971C4.09107 20.7025 4.37911 20.9736 4.70356 21.2022C5.83595 22 7.46655 22 10.7277 22H11.5005C12.0351 22 13.0342 22 13.5005 21.9972M3.00049 12C3.00049 10.159 4.49287 8.66667 6.33382 8.66667C6.9996 8.66667 7.78452 8.78333 8.43185 8.60988C9.007 8.45576 9.45625 8.00652 9.61036 7.43136C9.78381 6.78404 9.66715 5.99912 9.66715 5.33333C9.66715 3.49238 11.1595 2 13.0005 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.7526 15.8111C20.8574 14.5466 18.9227 13.5141 17.4442 14.2069C15.5972 15.0722 15.7582 17.2594 18.0394 17.3751C19.0545 17.4265 19.9424 17.3169 20.5458 17.9708C21.1492 18.6248 21.4107 20.2901 19.632 20.8553C17.8534 21.4204 15.9995 20.4125 15.9995 19.1831M18.4705 13V13.9777M18.4705 21.2204V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FileDollarIcon;
