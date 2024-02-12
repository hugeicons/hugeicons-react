import * as React from "react";
import type { SVGProps } from "react";

interface Touch02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Touch02Icon = (props: Touch02IconProps) => {
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
        <path d="M17.1422 21.9975C17.0905 20.0835 17.2194 19.853 17.3561 19.4272C17.4929 19.0015 18.4492 17.466 18.7875 16.369C19.8823 12.8197 18.862 12.0648 17.5016 11.0583C15.9931 9.94208 13.1478 9.37679 11.7367 9.49918V3.74572C11.7367 2.78239 10.9558 2.00146 9.99246 2.00146C9.02914 2.00146 8.24821 2.78239 8.24821 3.74572V9.96558M8.24872 21.9983V20.9849C8.18426 20.0405 7.24627 18.923 6.0777 17.3162C4.87607 15.5755 4.61785 14.6968 4.80689 13.8843C4.90426 13.469 5.15692 12.7827 6.39745 11.6099L8.24821 9.96558M8.24821 14.0318V9.96558" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Touch02Icon;
