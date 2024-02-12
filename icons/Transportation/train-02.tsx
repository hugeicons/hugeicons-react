import * as React from "react";
import type { SVGProps } from "react";

interface Train02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Train02Icon = (props: Train02IconProps) => {
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
        <path d="M20 10C20 14.4183 16.4183 20 12 20C7.58172 20 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 18C8.93901 16.7807 10.3819 16 12 16C13.6181 16 15.061 16.7807 16 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.24863 9.60369C10.1074 9.85527 11.0339 10 12 10C12.9661 10 13.8926 9.85527 14.7514 9.60369C15.9101 9.26423 16.4186 8.6101 15.5953 7.58805C13.8898 5.47065 10.1102 5.47065 8.40466 7.58805C7.5814 8.6101 8.08993 9.26423 9.24863 9.60369Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 19L3 22M19 19L21 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Train02Icon;
