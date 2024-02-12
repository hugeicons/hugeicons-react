import * as React from "react";
import type { SVGProps } from "react";

interface DigitalClockIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DigitalClockIcon = (props: DigitalClockIconProps) => {
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
        <path d="M5 19.25V21.25M19 19.25V21.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 11.25C2 8.42157 2 7.00736 2.87868 6.12868C3.75736 5.25 5.17157 5.25 8 5.25H16C18.8284 5.25 20.2426 5.25 21.1213 6.12868C22 7.00736 22 8.42157 22 11.25V13.25C22 16.0784 22 17.4926 21.1213 18.3713C20.2426 19.25 18.8284 19.25 16 19.25H8C5.17157 19.25 3.75736 19.25 2.87868 18.3713C2 17.4926 2 16.0784 2 13.25V11.25Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 5.25L9.45858 3.86345C9.43124 3.79345 9.41757 3.75845 9.40111 3.72421C9.38465 3.68997 9.36672 3.65897 9.33088 3.59696C9.14894 3.28225 9.03695 3.11285 8.841 3.00067C8.2572 2.66644 6.7428 2.66644 6.159 3.00067C5.96305 3.11285 5.85106 3.28225 5.66912 3.59697C5.63328 3.65897 5.61535 3.68997 5.59889 3.72421C5.58243 3.75845 5.56876 3.79345 5.54142 3.86345L5 5.25" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6.50586 10.2402L6.50586 14.2555M17.4993 10.2627V14.2332M9.48929 10.99H9.50793M9.48929 13.4963H9.50793M13.0084 14.2332H14.4853C14.7614 14.2332 14.9853 14.0093 14.9853 13.7332V10.7627C14.9853 10.4866 14.7614 10.2627 14.4853 10.2627H13.0084C12.7322 10.2627 12.5084 10.4866 12.5084 10.7627V13.7332C12.5084 14.0093 12.7322 14.2332 13.0084 14.2332Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DigitalClockIcon;
