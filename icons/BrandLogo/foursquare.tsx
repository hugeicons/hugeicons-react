import * as React from "react";
import type { SVGProps } from "react";

interface FoursquareIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FoursquareIcon = (props: FoursquareIconProps) => {
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
        <path d="M15.8989 2H7.71957C6.43755 2 5.79654 2 5.39827 2.4282C5 2.8564 5 3.54557 5 4.92392V16.7262C5 19.9619 5 21.5797 5.87654 21.938C6.75308 22.2963 7.75279 21.0872 9.75219 18.6688L11.7113 16.2992C11.9776 15.9771 12.1107 15.816 12.2879 15.7305C12.4651 15.645 12.6655 15.645 13.0664 15.645H13.1431C14.4596 15.645 15.1178 15.645 15.6025 15.2519C16.0872 14.8588 16.268 14.1784 16.6297 12.8174L18.5139 5.72719C18.9681 4.01783 19.1952 3.16315 18.7872 2.58158C18.3792 2 17.5524 2 15.8989 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M17.5 9L12 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FoursquareIcon;