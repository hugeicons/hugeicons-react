import * as React from "react";
import type { SVGProps } from "react";

interface TaskDaily02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TaskDaily02Icon = (props: TaskDaily02IconProps) => {
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
        <path d="M3.5 9.36842C3.5 5.89491 3.5 4.15816 4.52513 3.07908C5.55025 2 7.20017 2 10.5 2H13.5C16.7998 2 18.4497 2 19.4749 3.07908C20.5 4.15816 20.5 5.89491 20.5 9.36842V14.6316C20.5 18.1051 20.5 19.8418 19.4749 20.9209C18.4497 22 16.7998 22 13.5 22H10.5C7.20017 22 5.55025 22 4.52513 20.9209C3.5 19.8418 3.5 18.1051 3.5 14.6316V9.36842Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.5 11H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 12C7 12 7.5 12 8 13C8 13 9.58824 10.5 11 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.5 17H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 2L8.0822 2.4932C8.28174 3.69044 8.38151 4.28906 8.80113 4.64453C9.22075 5 9.82762 5 11.0414 5H12.9586C14.1724 5 14.7793 5 15.1989 4.64453C15.6185 4.28906 15.7183 3.69044 15.9178 2.4932L16 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 17H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default TaskDaily02Icon;
