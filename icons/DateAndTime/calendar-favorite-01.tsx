import * as React from "react";
import type { SVGProps } from "react";

interface CalendarFavorite01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CalendarFavorite01Icon = (props: CalendarFavorite01IconProps) => {
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
        <path d="M17.7774 13.6499L18.5693 15.2468C18.6773 15.4691 18.9653 15.6823 19.2083 15.7231L20.6436 15.9636C21.5615 16.1178 21.7775 16.7893 21.1161 17.4516L20.0002 18.5767C19.8112 18.7673 19.7077 19.1347 19.7662 19.3979L20.0857 20.7906C20.3377 21.893 19.7572 22.3195 18.7898 21.7433L17.4445 20.9403C17.2015 20.7952 16.801 20.7952 16.5536 20.9403L15.2082 21.7433C14.2453 22.3195 13.6604 21.8885 13.9124 20.7906L14.2318 19.3979C14.2903 19.1347 14.1868 18.7673 13.9979 18.5767L12.882 17.4516C12.225 16.7893 12.4365 16.1178 13.3544 15.9636L14.7898 15.7231C15.0282 15.6823 15.3162 15.4691 15.4242 15.2468L16.2161 13.6499C16.6481 12.7834 17.35 12.7834 17.7774 13.6499Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 2V4M6 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.4997 11.5C21.4957 7.63364 21.4267 5.62803 20.2479 4.35364C18.9958 3 16.9805 3 12.95 3H11.05C7.01949 3 5.00424 3 3.75212 4.35364C2.5 5.70728 2.5 7.88594 2.5 12.2432V12.7568C2.5 17.1141 2.5 19.2927 3.75212 20.6464C4.94594 21.937 6.83349 21.9971 10.5 21.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 8H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CalendarFavorite01Icon;
