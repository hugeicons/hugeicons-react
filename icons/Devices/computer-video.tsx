import * as React from "react";
import type { SVGProps } from "react";

interface ComputerVideoIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ComputerVideoIcon = (props: ComputerVideoIconProps) => {
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
        <path d="M11 15H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 18V22" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 22H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 2.00098C6.37454 2.00933 4.9565 2.08726 3.91891 2.81379C3.48891 3.11488 3.1149 3.48888 2.81382 3.91888C2 5.08113 2 6.72074 2 9.99997C2 13.2792 2 14.9188 2.81382 16.0811C3.1149 16.5111 3.48891 16.8851 3.91891 17.1862C5.08116 18 6.72077 18 10 18H14C17.2792 18 18.9188 18 20.0811 17.1862C20.5111 16.8851 20.8851 16.5111 21.1862 16.0811C21.9127 15.0435 21.9906 13.6254 21.999 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19.5 4.14631L19.563 4.10086C20.6208 3.3371 21.1498 2.95522 21.5749 3.13961C22 3.324 22 3.9353 22 5.15791V5.84209C22 7.0647 22 7.676 21.5749 7.86039C21.1498 8.04478 20.6208 7.6629 19.563 6.89914L19.5 6.85369M15.5 9H16C17.6499 9 18.4749 9 18.9874 8.55151C19.5 8.10301 19.5 7.38118 19.5 5.9375V5.0625C19.5 3.61882 19.5 2.89699 18.9874 2.44849C18.4749 2 17.6499 2 16 2H15.5C13.8501 2 13.0251 2 12.5126 2.44849C12 2.89699 12 3.61882 12 5.0625V5.9375C12 7.38118 12 8.10301 12.5126 8.55151C13.0251 9 13.8501 9 15.5 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default ComputerVideoIcon;
