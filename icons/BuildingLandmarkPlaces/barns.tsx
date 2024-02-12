import * as React from "react";
import type { SVGProps } from "react";

interface BarnsIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BarnsIcon = (props: BarnsIconProps) => {
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
        <path d="M4.36271 6.29576L3.34475 8.60648C3.17301 8.99634 3.08714 9.19127 3.04357 9.39839C3 9.60552 3 9.81883 3 10.2455V19.9823C3 20.9334 3 21.409 3.29289 21.7045C3.58579 22 4.05719 22 5 22H19C19.9428 22 20.4142 22 20.7071 21.7045C21 21.409 21 20.9334 21 19.9823V9.83728C21 9.36311 21 9.12602 20.9465 8.89737C20.893 8.66872 20.7879 8.45666 20.5777 8.03255L19.6553 6.1713C19.3311 5.51715 19.169 5.19007 18.9108 4.94452C18.6527 4.69897 18.3196 4.55492 17.6532 4.26682L13.5757 2.50379C12.7989 2.16793 12.4105 2 12 2C11.5895 2 11.2011 2.16793 10.4243 2.50379L6.44228 4.22552C5.72974 4.53361 5.37347 4.68765 5.10422 4.95569C4.83498 5.22372 4.67755 5.58107 4.36271 6.29576Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 22V13M17 13V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 13L17 22M7 22L17 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 13H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 10C13.1046 10 14 9.10457 14 8C14 6.89543 13.1046 6 12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BarnsIcon;
