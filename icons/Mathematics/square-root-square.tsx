import * as React from "react";
import type { SVGProps } from "react";

interface SquareRootSquareIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SquareRootSquareIcon = (props: SquareRootSquareIconProps) => {
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
        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M18 7.99023H12.5167C11.7 7.99023 11.46 8.03023 11.299 8.85428L9.95406 14.4595C9.62198 15.7876 9.45066 15.9836 9.12 16.0102C8.76 15.8902 8.58977 15.5825 7.98 14.3302L7.63508 13.5702C7.37243 13.0308 7.28553 12.8032 7.02 12.7302C6.62037 12.6202 6.30716 12.931 6 13.1302M13.1035 11.4223C13.5235 11.4084 13.9795 11.3903 14.2291 11.8063C14.5724 12.4987 15.1156 13.9175 15.3175 14.3676C15.4185 14.5407 15.4795 14.6903 15.8395 14.8103C16.1088 14.8449 16.4995 14.8543 16.4995 14.8543M16.7407 11.4101C15.8945 11.4101 15.3905 12.3561 14.9167 12.9489C14.3074 13.8556 13.6807 14.8701 12.8887 14.8421" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SquareRootSquareIcon;
