import * as React from "react";
import type { SVGProps } from "react";

interface ArrowExpand02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ArrowExpand02Icon = (props: ArrowExpand02IconProps) => {
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
        <path d="M7.5 3.26621C6.6556 3.25421 3.8591 2.67328 3.2662 3.26621C2.6733 3.85913 3.2542 6.65559 3.2662 7.5M3.49401 3.49097L10.4978 10.4961M20.7338 16.5C20.7458 17.3444 21.3267 20.1409 20.7338 20.7338C20.1409 21.3267 17.3444 20.7458 16.5 20.7338M13.4981 13.4974L20.5019 20.5026" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ArrowExpand02Icon;
