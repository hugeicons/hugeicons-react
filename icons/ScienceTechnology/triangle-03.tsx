import * as React from "react";
import type { SVGProps } from "react";

interface Triangle03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Triangle03Icon = (props: Triangle03IconProps) => {
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
        <path d="M3 17.3362V7.10375C3 5.22156 3 4.28046 3.56858 4.04626C4.13717 3.81205 4.80633 4.47751 6.14468 5.80841L18.2764 17.8728C19.6148 19.2037 20.2839 19.8692 20.0484 20.4346C19.8129 21 18.8665 21 16.9739 21H6.68422C4.94747 21 4.07908 21 3.53955 20.4635C3 19.9269 3 19.0634 3 17.3362Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.9159 12.8369L17.4805 9.41992M20.9159 12.8369C21.078 12.6771 20.9581 11.3526 20.9461 10.5133M20.9159 12.8369C20.7539 12.9966 19.9987 12.8893 18.6077 12.8184" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.129 3.08307L14.5645 6.5M11.129 3.08307C10.967 3.24282 11.0868 4.56733 11.0988 5.40659M11.129 3.08307C11.2911 2.92332 12.0462 3.03064 13.4372 3.10157" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.9096 3.08363L17.4736 6.5M20.9096 3.08363C20.749 2.92247 19.4171 3.04169 18.5731 3.05362M20.9096 3.08363C21.0703 3.24479 20.9624 3.99571 20.891 5.37903" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <ellipse cx="16.0878" cy="8.01514" rx="1.38268" ry="1.375" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default Triangle03Icon;
