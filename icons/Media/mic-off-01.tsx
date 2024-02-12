import * as React from "react";
import type { SVGProps } from "react";

interface MicOff01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MicOff01Icon = (props: MicOff01IconProps) => {
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
        <path d="M2 2L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 11C4 15.4183 7.58172 19 12 19M12 19C13.9545 19 15.7454 18.2991 17.1348 17.1348M12 19V22M12 22H15M12 22H9M20 11C20 12.6514 19.4996 14.1859 18.6422 15.4603" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17.0078 6.99562C17.0078 4.2342 14.7692 2.01562 12.0078 2.01562C10.139 2.01562 8.5379 2.98089 7.67981 4.49962M17.0078 6.99562L13.9798 7.00763M17.0078 6.99562V11.0036M7.00781 6.99562V11.0156C7.00781 13.777 9.24639 16.0156 12.0078 16.0156C13.1432 16.0156 14.1725 15.6252 15.0118 14.9876M16.4465 13.2596C16.8051 12.5701 17.0078 11.8465 17.0078 11.0156V11.0036M14.1829 11.0036H17.0078" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default MicOff01Icon;
