import * as React from "react";
import type { SVGProps } from "react";

interface BorderTop02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BorderTop02Icon = (props: BorderTop02IconProps) => {
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
        <path d="M2.75338 17.6664C2.94666 18.7148 3.28853 19.4863 3.8932 20.0963C4.49787 20.7063 5.26271 21.0511 6.30195 21.2461M2.50691 9.99976C2.50195 10.5893 2.50195 11.2265 2.50195 11.9164C2.50195 12.6063 2.50195 13.2436 2.50691 13.8331M10.102 21.4948C10.6864 21.4998 11.3181 21.4998 12.002 21.4998C12.6859 21.4998 13.3176 21.4998 13.902 21.4948M17.702 21.2461C18.7412 21.0511 19.506 20.7063 20.1107 20.0963C20.7154 19.4863 21.0572 18.7148 21.2505 17.6664M21.497 9.99976C21.502 10.5891 21.502 11.2268 21.502 11.9164C21.502 12.6063 21.502 13.2434 21.497 13.8329" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.5 6.49988C2.69854 5.40594 3.04969 4.60084 3.6708 3.96434C5.09987 2.49988 7.39991 2.49988 12 2.49988C16.6001 2.49988 18.9001 2.49988 20.3292 3.96435C20.9503 4.60084 21.3015 5.40594 21.5 6.49988" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BorderTop02Icon;
