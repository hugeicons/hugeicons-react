import * as React from "react";
import type { SVGProps } from "react";

interface HandcuffsIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const HandcuffsIcon = (props: HandcuffsIconProps) => {
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
        <path d="M2 14.1669C2 17.3886 4.68629 20.0002 8 20.0002C11.3137 20.0002 14 17.3886 14 14.1669C14 12.1875 12.986 10.4384 11.4354 9.3838C11.1261 9.17343 11 8.99824 11 8.61186C11 7.80902 11 7.40761 10.8671 7.09027C10.4148 6.01029 9.33985 6.00024 8.31377 6.00024H7.68623C6.66015 6.00024 5.58523 6.01029 5.13291 7.09027C5 7.40761 5 7.80902 5 8.61186C5 8.97963 4.88397 9.16656 4.56458 9.3838C3.01403 10.4384 2 12.1875 2 14.1669Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.5101 8.06642C14.8836 8.00151 15.289 8 15.6871 8H16.3146C17.3407 8 18.4156 8.01005 18.868 9.09003C19.0009 9.40737 19.0009 9.80878 19.0009 10.6116C19.0009 10.998 19.127 11.1732 19.4363 11.3836C20.9868 12.4382 22.0009 14.1873 22.0009 16.1667C22.0009 19.3883 19.3146 22 16.0009 22C15.0054 22 14.0666 21.7643 13.2402 21.3472" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="8" cy="14.0002" r="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.1152 17.9971C17.166 17.9372 17.9997 17.0661 17.9997 16.0003C17.9997 15.2598 17.5973 14.6133 16.9992 14.2676" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 9V6.93331C16 5.28173 16 4.45594 15.5764 3.85855C15.1528 3.26117 14.4253 3.06089 12.9701 2.66032L12.8507 2.62744C10.677 2.02907 9.59021 1.72989 8.83911 2.31943C8.79173 2.35662 8.74584 2.39607 8.70159 2.43766C8 3.09705 8 4.33061 8 6.79775" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default HandcuffsIcon;
