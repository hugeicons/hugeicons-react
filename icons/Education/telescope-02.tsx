import * as React from "react";
import type { SVGProps } from "react";

interface Telescope02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Telescope02Icon = (props: Telescope02IconProps) => {
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
        <path d="M19 22L14 13L9 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.9196 4L7.02715 9.2559C6.04492 9.83645 5.70838 11.1222 6.27548 12.1278L7.30228 13.9485C7.86937 14.954 9.12535 15.2985 10.1076 14.718L19 9.46209" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M16.2195 4.45572C15.7677 3.67278 16.0358 2.67162 16.8184 2.21959C17.601 1.76755 18.6017 2.03581 19.0535 2.81876L21.7805 7.54428C22.2323 8.32723 21.9642 9.32838 21.1816 9.78042C20.399 10.2325 19.3983 9.96419 18.9465 9.18124L16.2195 4.45572Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 14.2645L2.73817 15.6322M2.73817 15.6322L3.47634 17M2.73817 15.6322L6.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Telescope02Icon;
