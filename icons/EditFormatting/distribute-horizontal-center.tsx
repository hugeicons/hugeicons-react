import * as React from "react";
import type { SVGProps } from "react";

interface DistributeHorizontalCenterIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DistributeHorizontalCenterIcon = (props: DistributeHorizontalCenterIconProps) => {
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
        <path d="M7 5L7 2M7 19L7 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 8.00232C17.8439 8.00232 18.8179 7.91895 19.299 8.75232C19.5 9.10039 19.5 9.5677 19.5 10.5023V13.5023C19.5 14.4369 19.5 14.9042 19.299 15.2523C18.8179 16.0857 17.8439 16.0023 17 16.0023C16.1561 16.0023 15.1821 16.0857 14.701 15.2523C14.5 14.9042 14.5 14.4369 14.5 13.5023L14.5 10.5023C14.5 9.5677 14.5 9.10039 14.701 8.75232C15.1821 7.91895 16.1561 8.00232 17 8.00232Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 5.00232C7.84389 5.00232 8.81789 4.91895 9.29904 5.75232C9.5 6.10039 9.5 6.5677 9.5 7.50232L9.5 16.5023C9.5 17.4369 9.5 17.9042 9.29904 18.2523C8.81789 19.0857 7.84389 19.0023 7 19.0023C6.15611 19.0023 5.18211 19.0857 4.70096 18.2523C4.5 17.9042 4.5 17.4369 4.5 16.5023L4.5 7.50232C4.5 6.5677 4.5 6.10039 4.70096 5.75232C5.18211 4.91895 6.15611 5.00232 7 5.00232Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 8V2M17 16V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DistributeHorizontalCenterIcon;
