import * as React from "react";
import type { SVGProps } from "react";

interface DistributeVerticalTopIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DistributeVerticalTopIcon = (props: DistributeVerticalTopIconProps) => {
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
        <path d="M2 2L22 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 14.0005L22 14.0005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.00232 7.5C8.00232 6.65611 7.91895 5.68211 8.75232 5.20096C9.10039 5 9.5677 5 10.5023 5H13.5023C14.4369 5 14.9042 5 15.2523 5.20096C16.0857 5.68211 16.0023 6.65611 16.0023 7.5C16.0023 8.34389 16.0857 9.31789 15.2523 9.79904C14.9042 10 14.4369 10 13.5023 10L10.5023 10C9.5677 10 9.10039 10 8.75232 9.79904C7.91895 9.31789 8.00232 8.34389 8.00232 7.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.00232 19.5C5.00232 18.6561 4.91895 17.6821 5.75232 17.201C6.10039 17 6.5677 17 7.50232 17L16.5023 17C17.4369 17 17.9042 17 18.2523 17.201C19.0857 17.6821 19.0023 18.6561 19.0023 19.5C19.0023 20.3439 19.0857 21.3179 18.2523 21.799C17.9042 22 17.4369 22 16.5023 22L7.50232 22C6.5677 22 6.10039 22 5.75232 21.799C4.91895 21.3179 5.00232 20.3439 5.00232 19.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DistributeVerticalTopIcon;
