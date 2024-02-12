import * as React from "react";
import type { SVGProps } from "react";

interface MoneyReceive01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MoneyReceive01Icon = (props: MoneyReceive01IconProps) => {
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
        <path d="M18 6C19.3001 6.1287 20.1752 6.41956 20.8284 7.07691C22 8.25596 22 10.1536 22 13.9489C22 17.7442 22 19.6419 20.8284 20.8209C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8209C2 19.6419 2 17.7442 2 13.9489C2 10.1536 2 8.25596 3.17157 7.07691C3.82475 6.41956 4.69989 6.1287 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9.5 5.5C9.99153 6.0057 11.2998 8 12 8M14.5 5.5C14.0085 6.0057 12.7002 8 12 8M12 8V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.5078 14H18.4988" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.50781 14H5.49883" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.5 14C14.5 15.3807 13.3807 16.5 12 16.5C10.6193 16.5 9.5 15.3807 9.5 14C9.5 12.6193 10.6193 11.5 12 11.5C13.3807 11.5 14.5 12.6193 14.5 14Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default MoneyReceive01Icon;
