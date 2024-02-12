import * as React from "react";
import type { SVGProps } from "react";

interface CalendarSetting02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CalendarSetting02Icon = (props: CalendarSetting02IconProps) => {
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
        <path d="M3 8H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 17.5V18.5M12 17.5C11.1324 17.5 10.368 17.0581 9.91974 16.387M12 17.5C12.8676 17.5 13.632 17.0581 14.0803 16.387M12 12.5C12.8677 12.5 13.6321 12.942 14.0804 13.6131M12 12.5C11.1323 12.5 10.3679 12.942 9.91964 13.6131M12 12.5V11.5M15 13L14.0804 13.6131M9.00032 17L9.91974 16.387M9 13L9.91964 13.6131M14.9997 17L14.0803 16.387M14.0804 13.6131C14.3454 14.01 14.5 14.4869 14.5 15C14.5 15.5131 14.3454 15.9901 14.0803 16.387M9.91964 13.6131C9.65455 14.01 9.5 14.4869 9.5 15C9.5 15.5131 9.65459 15.9901 9.91974 16.387" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default CalendarSetting02Icon;
