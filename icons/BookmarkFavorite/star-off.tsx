import * as React from "react";
import type { SVGProps } from "react";

interface StarOffIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const StarOffIcon = (props: StarOffIconProps) => {
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
        <path d="M18.5038 14.5L21.1477 11.8925C22.616 10.4206 22.1366 8.92853 20.099 8.58575L16.9128 8.05143C16.3734 7.9607 15.7342 7.48687 15.4945 6.99288L13.7366 3.44418C12.7877 1.51861 11.2296 1.51861 10.2707 3.44418L9.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.29561 8C7.22668 8.0227 7.15848 8.04009 7.09201 8.05146L3.90008 8.58578C1.85885 8.92855 1.38856 10.4206 2.84945 11.8925L5.33095 14.3927C5.7512 14.8162 5.98134 15.6328 5.85126 16.2175L5.14083 19.3125C4.58049 21.7522 5.88128 22.71 8.02257 21.4296L11.0144 19.6452C11.5647 19.3226 12.4553 19.3226 12.9956 19.6452L15.9874 21.4296C18.1387 22.71 19.4295 21.7623 18.8691 19.3125L18.7974 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 2L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default StarOffIcon;
