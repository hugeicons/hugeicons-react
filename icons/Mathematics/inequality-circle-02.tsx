import * as React from "react";
import type { SVGProps } from "react";

interface InequalityCircle02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const InequalityCircle02Icon = (props: InequalityCircle02IconProps) => {
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
        <path d="M12 22C6.4772 22 2 17.5228 2 12C2 6.47715 6.4772 2 12 2C17.5229 2 22 6.47715 22 12C22 17.5228 17.5229 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10.0201 7.5L15.8641 12.6714C16.2001 13.08 15.8711 13.5 15.4201 13.5H8.00415" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.0195 16.5H7.99773" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default InequalityCircle02Icon;
