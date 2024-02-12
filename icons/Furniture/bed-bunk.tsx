import * as React from "react";
import type { SVGProps } from "react";

interface BedBunkIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BedBunkIcon = (props: BedBunkIconProps) => {
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
        <path d="M2 11H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 8H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.5 5C5.8956 5 5.32433 5.1287 4.81768 5.35753C4.48573 5.50746 4.31975 5.58242 4.15988 5.83005C4 6.07769 4 6.32443 4 6.8179V8H9V6.8179C9 6.32443 9 6.07769 8.84013 5.83005C8.68025 5.58242 8.51427 5.50746 8.18232 5.35753C7.67567 5.1287 7.1044 5 6.5 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6.5 14C5.79893 14 5.14245 14.1732 4.57968 14.4749C4.47363 14.5317 4.4206 14.5602 4.33052 14.6414C4.20736 14.7524 4.06861 14.9842 4.02898 15.1452C4 15.2629 4 15.3595 4 15.5525C4 15.9692 4 16.1776 4.06113 16.3443C4.16232 16.6202 4.37978 16.8377 4.65572 16.9389C4.82243 17 5.03079 17 5.44751 17H7.55249C7.96921 17 8.17757 17 8.34428 16.9389C8.62022 16.8377 8.83768 16.6202 8.93887 16.3443C9 16.1776 9 15.9692 9 15.5525C9 15.3595 9 15.2629 8.97102 15.1452C8.93139 14.9842 8.79263 14.7524 8.66948 14.6414C8.5794 14.5602 8.52637 14.5317 8.42032 14.4749C7.85755 14.1732 7.20107 14 6.5 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 17H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 20H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 12L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 15L22 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 4L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 4L17 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 4L2 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BedBunkIcon;
