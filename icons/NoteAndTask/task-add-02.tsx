import * as React from "react";
import type { SVGProps } from "react";

interface TaskAdd02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TaskAdd02Icon = (props: TaskAdd02IconProps) => {
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
        <path d="M12.5 22H9.5C6.20017 22 4.55025 22 3.52513 20.9209C2.5 19.8418 2.5 18.1051 2.5 14.6316V9.36842C2.5 5.89491 2.5 4.15816 3.52513 3.07908C4.55025 2 6.20017 2 9.5 2H12.5C15.7998 2 17.4497 2 18.4749 3.07908C19.5 4.15816 19.5 5.89491 19.5 9.36842V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 15L18 22M21.5 18.5L14.5 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 2L7.0822 2.4932C7.28174 3.69044 7.38151 4.28906 7.80113 4.64453C8.22075 5 8.82762 5 10.0414 5H11.9586C13.1724 5 13.7793 5 14.1989 4.64453C14.6185 4.28906 14.7183 3.69044 14.9178 2.4932L15 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 16H11M7 11H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default TaskAdd02Icon;
