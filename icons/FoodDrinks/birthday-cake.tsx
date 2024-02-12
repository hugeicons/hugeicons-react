import * as React from "react";
import type { SVGProps } from "react";

interface BirthdayCakeIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BirthdayCakeIcon = (props: BirthdayCakeIconProps) => {
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
        <path d="M13.5 4.5C13.5 5.32843 12.8284 6 12 6C11.1716 6 10.5 5.32843 10.5 4.5C10.5 3.67157 12 2 12 2C12 2 13.5 3.67157 13.5 4.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 6V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.6667 14C19.2315 14 20.5 12.8807 20.5 11.5C20.5 10.1193 19.2315 9 17.6667 9H6.33333C4.76853 9 3.5 10.1193 3.5 11.5C3.5 12.8807 4.76853 14 6.33333 14C7.70408 14 8.90415 13.1411 9.16667 12C9.42919 13.1411 10.6293 14 12 14C13.3707 14 14.5708 13.1411 14.8333 12C15.0959 13.1411 16.2959 14 17.6667 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M5 14L5.52089 16.5796C6.04532 19.1768 6.30754 20.4754 7.19608 21.2377C8.08462 22 9.33608 22 11.839 22H12.161C14.6639 22 15.9154 22 16.8039 21.2377C17.6925 20.4754 17.9547 19.1768 18.4791 16.5796L19 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BirthdayCakeIcon;
