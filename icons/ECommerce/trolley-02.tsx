import * as React from "react";
import type { SVGProps } from "react";

interface Trolley02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Trolley02Icon = (props: Trolley02IconProps) => {
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
        <path d="M3 2H4.30116C5.48672 2 6.0795 2 6.4814 2.37142C6.88331 2.74285 6.96165 3.36307 7.11834 4.60351L8.24573 13.5287C8.45464 15.1826 8.5591 16.0095 9.09497 16.5048C9.63085 17 10.4212 17 12.002 17H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="11.5" cy="19.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="18.5" cy="19.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 14H16C14.1144 14 13.1716 14 12.5858 13.4142C12 12.8284 12 11.8856 12 10V8C12 6.11438 12 5.17157 12.5858 4.58579C13.1716 4 14.1144 4 16 4H18C19.8856 4 20.8284 4 21.4142 4.58579C22 5.17157 22 6.11438 22 8V10C22 11.8856 22 12.8284 21.4142 13.4142C20.8284 14 19.8856 14 18 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.5 7L17.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Trolley02Icon;
