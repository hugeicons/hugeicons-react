import * as React from "react";
import type { SVGProps } from "react";

interface Cursor02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Cursor02Icon = (props: Cursor02IconProps) => {
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
        <path d="M3.42847 3.52383C5.4919 1.30171 21.0128 6.74513 21 8.73253C20.9855 10.9862 14.9387 11.6795 13.2626 12.1497C12.2548 12.4325 11.9848 12.7223 11.7524 13.7792C10.6999 18.5657 10.1715 20.9464 8.96711 20.9997C7.04737 21.0845 1.41472 5.69242 3.42847 3.52383Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default Cursor02Icon;
