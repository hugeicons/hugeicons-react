import * as React from "react";
import type { SVGProps } from "react";

interface VolleyballIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const VolleyballIcon = (props: VolleyballIconProps) => {
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
        <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8.12046 3C7.67458 4.61905 7.76376 8.58571 11.6875 11.5M11.6875 11.5C16.6295 10.17 20.125 10.65 22 12.3498M11.6875 11.5C12.2525 16.1881 8.875 19.15 7 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 8C11.087 6.11368 16.3261 5.12819 20.5 7.01432" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M16.8885 11C17.4777 13.8947 15.7144 19.1883 12 22" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10 17C7.37458 15.7396 4.15837 10.9595 4 6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default VolleyballIcon;
