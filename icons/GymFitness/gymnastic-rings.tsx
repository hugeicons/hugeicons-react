import * as React from "react";
import type { SVGProps } from "react";

interface GymnasticRingsIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const GymnasticRingsIcon = (props: GymnasticRingsIconProps) => {
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
        <path d="M16.5 22C19.5376 22 22 19.5376 22 16.5C22 13.4624 19.5376 11 16.5 11C13.4624 11 11 13.4624 11 16.5C11 19.5376 13.4624 22 16.5 22Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16.5 11V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 9.30301C10.9999 7.90869 9.36299 7 7.51337 7C4.46842 7 2 9.46269 2 12.5006C2 15.7438 4.92815 18.3289 8.14063 17.9659" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7.5 7L7.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default GymnasticRingsIcon;
