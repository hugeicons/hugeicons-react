import * as React from "react";
import type { SVGProps } from "react";

interface CookBookIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CookBookIcon = (props: CookBookIconProps) => {
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
        <path d="M21 16.9286V10C21 6.22876 21 4.34315 19.8284 3.17157C18.6569 2 16.7712 2 13 2H12C8.22876 2 6.34315 2 5.17157 3.17157C4 4.34315 4 6.22876 4 10V19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M21 17H6.5C5.11929 17 4 18.1193 4 19.5C4 20.8807 5.11929 22 6.5 22H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M21 22C19.6193 22 18.5 20.8807 18.5 19.5C18.5 18.1193 19.6193 17 21 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.3877 6.84933C14.7057 6.63424 15.0883 6.50878 15.5 6.50878C16.6046 6.50878 17.5 7.41206 17.5 8.52633C17.5 9.62271 16.5957 10.54 15.5 10.54V11.5C15.5 12.4428 15.5 12.9142 15.2071 13.2071C14.9142 13.5 14.4428 13.5 13.5 13.5H11.5C10.5572 13.5 10.0858 13.5 9.79289 13.2071C9.5 12.9142 9.5 12.4428 9.5 11.5V10.665C8.33217 10.665 7.5 9.79515 7.5 8.52633C7.5 7.41206 8.39543 6.50878 9.5 6.50878C9.91166 6.50878 10.2943 6.63424 10.6123 6.84933C10.8857 6.06347 11.6276 5.5 12.5 5.5C13.3724 5.5 14.1143 6.06347 14.3877 6.84933ZM14.3877 6.84933C14.4604 7.05846 14.5 7.28335 14.5 7.51755" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CookBookIcon;
