import * as React from "react";
import type { SVGProps } from "react";

interface CalendarLock01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CalendarLock01Icon = (props: CalendarLock01IconProps) => {
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
        <path d="M21.4997 11.5C21.4957 7.63364 21.4267 5.62803 20.2479 4.35364C18.9958 3 16.9805 3 12.95 3H11.05C7.01949 3 5.00424 3 3.75212 4.35364C2.5 5.70728 2.5 7.88594 2.5 12.2432V12.7568C2.5 17.1141 2.5 19.2927 3.75212 20.6464C4.95133 21.9428 6.80467 21.9976 10.5 21.9999L12 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 8H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.2374 16.1771L16.2374 14.7868C16.2374 14.5814 16.246 14.3735 16.3196 14.1817C16.5155 13.6712 17.0346 13.0024 17.9795 13.0024C18.9245 13.0024 19.4639 13.6712 19.6598 14.1817C19.7335 14.3735 19.742 14.5814 19.742 14.7868L19.742 16.1771M16.3069 22H19.6929C20.6898 22 21.4979 21.1934 21.4979 20.1984V18.1971C21.4979 17.2021 20.6898 16.3955 19.6929 16.3955H16.3069C15.3101 16.3955 14.502 17.2021 14.502 18.1971V20.1984C14.502 21.1934 15.3101 22 16.3069 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CalendarLock01Icon;
