import * as React from "react";
import type { SVGProps } from "react";

interface CalendarFavorite02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CalendarFavorite02Icon = (props: CalendarFavorite02IconProps) => {
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
        <path d="M12.6047 12.0055L13.2206 13.2475C13.3046 13.4204 13.5286 13.5862 13.7175 13.618L14.8339 13.805C15.5478 13.925 15.7158 14.4472 15.2014 14.9624L14.3335 15.8374C14.1865 15.9856 14.106 16.2715 14.1515 16.4761L14.4 17.5594C14.596 18.4168 14.1445 18.7485 13.3921 18.3004L12.3457 17.6758C12.1567 17.5629 11.8453 17.5629 11.6528 17.6758L10.6064 18.3004C9.85748 18.7485 9.40253 18.4133 9.5985 17.5594L9.84698 16.4761C9.89247 16.2715 9.81198 15.9856 9.665 15.8374L8.79709 14.9624C8.28615 14.4472 8.45063 13.925 9.16455 13.805L10.2809 13.618C10.4664 13.5862 10.6904 13.4204 10.7744 13.2475L11.3903 12.0055C11.7263 11.3315 12.2722 11.3315 12.6047 12.0055Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CalendarFavorite02Icon;
