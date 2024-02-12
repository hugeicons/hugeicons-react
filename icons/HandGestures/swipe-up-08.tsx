import * as React from "react";
import type { SVGProps } from "react";

interface SwipeUp08IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SwipeUp08Icon = (props: SwipeUp08IconProps) => {
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
        <path d="M19.5039 1.99902V7.9919M19.5039 1.99902C18.8046 1.99902 17.4978 3.99095 17.0068 4.49605M19.5039 1.99902C20.2033 1.99902 21.5101 3.99095 22.0011 4.49605" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.53608 14.4459V9.97649M5.53608 9.97649V4.45422C5.53608 3.63356 6.22078 2.97217 7.04241 2.97217C7.86405 2.97217 8.51149 3.63356 8.51149 4.45422V8.45535M5.53608 9.97649C4.21867 11.1689 2.80102 12.6752 2.61011 13.061C1.72182 14.4116 1.81493 15.0654 2.80486 16.7179C3.64566 18.1215 4.77642 19.6792 4.84243 19.7539C5.51425 20.5144 5.38068 20.5145 6.35443 21.2286C7.22398 21.8314 9.02761 22.2514 13.256 21.8314C16.7006 21.2999 17.5259 18.2967 17.5079 16.8615V13.3172C17.7225 10.3713 16.4897 10.2384 14.2513 9.94841M8.51149 8.45535V10.9822M8.51149 8.45535C9.0701 7.54548 11.0989 7.91318 11.4943 9.63134M11.53 10.9782V9.97649C11.53 9.89752 11.5261 9.8183 11.5149 9.74018M11.4943 9.63134C11.496 9.63857 11.4976 9.64582 11.4992 9.6531C11.5056 9.68193 11.5108 9.71098 11.5149 9.74018M11.4943 9.63134C11.4984 9.66635 11.5052 9.70263 11.5149 9.74018M11.4943 9.63134C11.3539 8.43378 14.392 8.72572 14.5157 10.8318V11.9764" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default SwipeUp08Icon;
