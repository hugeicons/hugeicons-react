import * as React from "react";
import type { SVGProps } from "react";

interface WorkoutWarmUpIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const WorkoutWarmUpIcon = (props: WorkoutWarmUpIconProps) => {
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
        <path d="M14.5002 4.5C14.5002 5.32843 13.8286 6 13.0002 6C12.1717 6 11.5002 5.32843 11.5002 4.5C11.5002 3.67157 12.1717 3 13.0002 3C13.8286 3 14.5002 3.67157 14.5002 4.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M19 8.89062L13.9777 8.29142M19 21L18.5438 17.5301C18.2903 15.6021 18.1636 14.6381 17.4915 14.1298C16.8194 13.6215 15.8722 13.7731 13.9777 14.0765L12.1402 14.3707M13.9777 8.29142L12.2231 8.08208C11.4204 7.98631 11.0191 7.93843 10.7146 8.14419C10.41 8.34995 10.299 8.74397 10.077 9.53203L9.4087 11.904C9.02319 13.2724 8.83044 13.9565 9.19196 14.3707C9.55348 14.7849 10.2465 14.674 11.6326 14.452L12.1402 14.3707M13.9777 8.29142L12.1402 14.3707" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 17L9.44721 18.1056C9.15692 18.6862 8.68616 19.1569 8.10557 19.4472L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default WorkoutWarmUpIcon;
