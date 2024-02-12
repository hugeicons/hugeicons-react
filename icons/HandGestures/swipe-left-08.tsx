import * as React from "react";
import type { SVGProps } from "react";

interface SwipeLeft08IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SwipeLeft08Icon = (props: SwipeLeft08IconProps) => {
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
        <path d="M15.0083 4.49625H20.9999M15.0083 4.49625C15.0083 3.79687 16.9998 2.4902 17.5048 1.99927M15.0083 4.49625C15.0083 5.19564 16.9998 6.5023 17.5048 6.99324" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.53624 14.4459V9.9766M6.53624 9.9766V4.45443C6.53624 3.63379 7.22077 2.97241 8.04222 2.97241C8.86367 2.97241 9.51096 3.63379 9.51096 4.45443V8.45549M6.53624 9.9766C5.21914 11.169 3.80181 12.6752 3.61094 13.0611C2.72287 14.4116 2.81595 15.0654 3.80565 16.7179C4.64626 18.1215 5.77675 19.6791 5.84275 19.7538C6.51441 20.5143 6.38087 20.5144 7.3544 21.2285C8.22374 21.8313 10.027 22.2513 14.2543 21.8313C17.6981 21.2998 18.5232 18.2966 18.5053 16.8614V13.3172C18.7198 10.3714 17.4873 10.2385 15.2494 9.94852M9.51096 8.45549V10.9823M9.51096 8.45549C10.0694 7.54564 12.0977 7.91333 12.4931 9.63146M12.5288 10.9783V9.9766C12.5288 9.89763 12.5249 9.81842 12.5137 9.7403M12.4931 9.63146C12.4947 9.63869 12.4964 9.64594 12.498 9.65322C12.5043 9.68205 12.5095 9.7111 12.5137 9.7403M12.4931 9.63146C12.4972 9.66647 12.504 9.70275 12.5137 9.7403M12.4931 9.63146C12.3527 8.43393 15.3901 8.72585 15.5138 10.8319V11.9765" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default SwipeLeft08Icon;
