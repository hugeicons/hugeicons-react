import * as React from "react";
import type { SVGProps } from "react";

interface DistributeHorizontalLeftIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DistributeHorizontalLeftIcon = (props: DistributeHorizontalLeftIconProps) => {
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
        <path d="M2.00098 2V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 2V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.5 8.00232C18.6561 8.00232 17.6821 7.91895 17.201 8.75232C17 9.10039 17 9.5677 17 10.5023V13.5023C17 14.4369 17 14.9042 17.201 15.2523C17.6821 16.0857 18.6561 16.0023 19.5 16.0023C20.3439 16.0023 21.3179 16.0857 21.799 15.2523C22 14.9042 22 14.4369 22 13.5023V10.5023C22 9.5677 22 9.10039 21.799 8.75232C21.3179 7.91895 20.3439 8.00232 19.5 8.00232Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.5 5.00232C6.65611 5.00232 5.68211 4.91895 5.20096 5.75232C5 6.10039 5 6.5677 5 7.50232L5 16.5023C5 17.4369 5 17.9042 5.20096 18.2523C5.68211 19.0857 6.65611 19.0023 7.5 19.0023C8.34389 19.0023 9.31789 19.0857 9.79904 18.2523C10 17.9042 10 17.4369 10 16.5023L10 7.50232C10 6.5677 10 6.10039 9.79904 5.75232C9.31789 4.91895 8.34389 5.00232 7.5 5.00232Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DistributeHorizontalLeftIcon;
