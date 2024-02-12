import * as React from "react";
import type { SVGProps } from "react";

interface DashboardSquareSettingIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DashboardSquareSettingIcon = (props: DashboardSquareSettingIconProps) => {
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
        <path d="M18 9.35714V10.5M18 9.35714C16.9878 9.35714 16.0961 8.85207 15.573 8.08517M18 9.35714C19.0122 9.35714 19.9039 8.85207 20.427 8.08517M18 3.64286C19.0123 3.64286 19.9041 4.148 20.4271 4.915M18 3.64286C16.9877 3.64286 16.0959 4.148 15.5729 4.915M18 3.64286V2.5M21.5 4.21429L20.4271 4.915M14.5004 8.78571L15.573 8.08517M14.5 4.21429L15.5729 4.915M21.4996 8.78571L20.427 8.08517M20.4271 4.915C20.7364 5.36854 20.9167 5.91364 20.9167 6.5C20.9167 7.08643 20.7363 7.63159 20.427 8.08517M15.5729 4.915C15.2636 5.36854 15.0833 5.91364 15.0833 6.5C15.0833 7.08643 15.2637 7.63159 15.573 8.08517" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 6C2 4.59987 2 3.8998 2.27248 3.36502C2.51217 2.89462 2.89462 2.51217 3.36502 2.27248C3.8998 2 4.59987 2 6 2C7.40013 2 8.1002 2 8.63498 2.27248C9.10538 2.51217 9.48783 2.89462 9.72752 3.36502C10 3.8998 10 4.59987 10 6C10 7.40013 10 8.1002 9.72752 8.63498C9.48783 9.10538 9.10538 9.48783 8.63498 9.72752C8.1002 10 7.40013 10 6 10C4.59987 10 3.8998 10 3.36502 9.72752C2.89462 9.48783 2.51217 9.10538 2.27248 8.63498C2 8.1002 2 7.40013 2 6Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 18C2 16.5999 2 15.8998 2.27248 15.365C2.51217 14.8946 2.89462 14.5122 3.36502 14.2725C3.8998 14 4.59987 14 6 14C7.40013 14 8.1002 14 8.63498 14.2725C9.10538 14.5122 9.48783 14.8946 9.72752 15.365C10 15.8998 10 16.5999 10 18C10 19.4001 10 20.1002 9.72752 20.635C9.48783 21.1054 9.10538 21.4878 8.63498 21.7275C8.1002 22 7.40013 22 6 22C4.59987 22 3.8998 22 3.36502 21.7275C2.89462 21.4878 2.51217 21.1054 2.27248 20.635C2 20.1002 2 19.4001 2 18Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 18C14 16.5999 14 15.8998 14.2725 15.365C14.5122 14.8946 14.8946 14.5122 15.365 14.2725C15.8998 14 16.5999 14 18 14C19.4001 14 20.1002 14 20.635 14.2725C21.1054 14.5122 21.4878 14.8946 21.7275 15.365C22 15.8998 22 16.5999 22 18C22 19.4001 22 20.1002 21.7275 20.635C21.4878 21.1054 21.1054 21.4878 20.635 21.7275C20.1002 22 19.4001 22 18 22C16.5999 22 15.8998 22 15.365 21.7275C14.8946 21.4878 14.5122 21.1054 14.2725 20.635C14 20.1002 14 19.4001 14 18Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default DashboardSquareSettingIcon;
