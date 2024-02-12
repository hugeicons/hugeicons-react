import * as React from "react";
import type { SVGProps } from "react";

interface CalendarSetting01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CalendarSetting01Icon = (props: CalendarSetting01IconProps) => {
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
        <path d="M18 2V4M6 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.4997 11.5C21.4957 7.63364 21.4267 5.62803 20.2479 4.35364C18.9958 3 16.9805 3 12.95 3H11.05C7.01949 3 5.00424 3 3.75212 4.35364C2.5 5.70728 2.5 7.88594 2.5 12.2432V12.7568C2.5 17.1141 2.5 19.2927 3.75212 20.6464C4.95133 21.9428 6.80467 21.9976 10.5 21.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 8H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.5 20.7143V22M17.5 20.7143C16.3432 20.7143 15.3241 20.1461 14.7263 19.2833M17.5 20.7143C18.6568 20.7143 19.6759 20.1461 20.2737 19.2833M17.5 14.2857C18.6569 14.2857 19.6761 14.854 20.2738 15.7169M17.5 14.2857C16.3431 14.2857 15.3239 14.854 14.7262 15.7169M17.5 14.2857V13M21.5 14.9286L20.2738 15.7169M13.5004 20.0714L14.7263 19.2833M13.5 14.9286L14.7262 15.7169M21.4996 20.0714L20.2737 19.2833M20.2738 15.7169C20.6273 16.2271 20.8333 16.8403 20.8333 17.5C20.8333 18.1597 20.6272 18.773 20.2737 19.2833M14.7262 15.7169C14.3727 16.2271 14.1667 16.8403 14.1667 17.5C14.1667 18.1597 14.3728 18.773 14.7263 19.2833" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default CalendarSetting01Icon;
