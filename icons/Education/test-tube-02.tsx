import * as React from "react";
import type { SVGProps } from "react";

interface TestTube02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TestTube02Icon = (props: TestTube02IconProps) => {
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
        <path d="M16 2V18C16 20.2091 14.2091 22 12 22C9.79086 22 8 20.2091 8 18V2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 8.55626C8.88889 7.40291 10.3106 8.23432 12 9.31817C14.2222 10.7439 15.5556 9.65003 16 8.6152" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 2H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 18.002L11.0087 17.9996" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 14.002L13.0087 13.9996" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default TestTube02Icon;
