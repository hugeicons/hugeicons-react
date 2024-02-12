import * as React from "react";
import type { SVGProps } from "react";

interface TaskDone01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TaskDone01Icon = (props: TaskDone01IconProps) => {
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
        <path d="M13.5 20C13.5 20 14.5 20 15.5 22C15.5 22 18.6765 17 21.5 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 16H11M7 11H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6.5 3.5C4.9442 3.54667 4.01661 3.71984 3.37477 4.36227C2.49609 5.24177 2.49609 6.6573 2.49609 9.48836L2.49609 15.9944C2.49609 18.8255 2.49609 20.241 3.37477 21.1205C4.25345 22 5.66767 22 8.49609 22L10.9961 22M15.4922 3.5C17.048 3.54667 17.9756 3.71984 18.6174 4.36228C19.4961 5.24177 19.4961 6.6573 19.4961 9.48836V13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6.49609 3.75C6.49609 2.7835 7.2796 2 8.24609 2H13.7461C14.7126 2 15.4961 2.7835 15.4961 3.75C15.4961 4.7165 14.7126 5.5 13.7461 5.5H8.24609C7.2796 5.5 6.49609 4.7165 6.49609 3.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default TaskDone01Icon;
