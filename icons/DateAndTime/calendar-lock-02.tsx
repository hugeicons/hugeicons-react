import * as React from "react";
import type { SVGProps } from "react";

interface CalendarLock02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CalendarLock02Icon = (props: CalendarLock02IconProps) => {
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
        <path d="M10.484 14.1864L10.484 13.0293C10.484 12.8584 10.4913 12.6854 10.5547 12.5258C10.7232 12.101 11.1697 11.5444 11.9825 11.5444C12.7952 11.5444 13.2592 12.101 13.4278 12.5258C13.4911 12.6854 13.4985 12.8584 13.4985 13.0293L13.4985 14.1864M10.5437 19.0322H13.4562C14.3137 19.0322 15.0088 18.361 15.0088 17.533V15.8674C15.0088 15.0394 14.3137 14.3682 13.4562 14.3682H10.5437C9.6863 14.3682 8.99121 15.0394 8.99121 15.8674V17.533C8.99121 18.361 9.6863 19.0322 10.5437 19.0322Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CalendarLock02Icon;
