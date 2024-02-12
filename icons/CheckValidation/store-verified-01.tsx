import * as React from "react";
import type { SVGProps } from "react";

interface StoreVerified01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const StoreVerified01Icon = (props: StoreVerified01IconProps) => {
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
        <path d="M14.9714 7.5C14.9714 7.5 15.4714 7.5 15.9714 8.5C15.9714 8.5 17.5596 6 18.9714 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.9955 15.042L19.0242 19.5927C18.9749 20.9362 17.868 22 16.5193 22H5.3929C4.00856 22 2.88633 20.8814 2.88633 19.5014L2.97249 13.0355M8.9811 6.0129L5.14769 5.94884C4.25805 5.92732 3.46061 6.49283 3.18927 7.33765L2.09213 10.7538C1.96234 11.1579 1.95337 11.5994 2.16887 11.9654C2.95443 13.2993 5.06355 15.1192 8.41733 13.163M7.44597 11.3322C7.83606 12.6005 9.36537 14.8259 12.4861 13.5372" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22.0004 7.01618C22.0004 9.78653 19.7586 12.0324 16.9933 12.0324C14.2279 12.0324 11.9861 9.78653 11.9861 7.01618C11.9861 4.24582 14.2279 2 16.9933 2C19.7586 2 22.0004 4.24582 22.0004 7.01618Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default StoreVerified01Icon;
