import * as React from "react";
import type { SVGProps } from "react";

interface DeliverySecure02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DeliverySecure02Icon = (props: DeliverySecure02IconProps) => {
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
        <path d="M20.198 2.49951H3.802C3.05147 2.49951 2.6762 2.49951 2.41637 2.67677C2.28768 2.76456 2.18133 2.8806 2.10567 3.01578C1.9529 3.28872 1.99024 3.65744 2.06493 4.39488C2.18958 5.62575 2.2519 6.24119 2.57823 6.68119C2.74084 6.90046 2.94701 7.0847 3.18414 7.22266C3.65999 7.49951 4.28635 7.49951 5.53908 7.49951H18.4609C19.7136 7.49951 20.34 7.49951 20.8159 7.22266C21.053 7.0847 21.2592 6.90046 21.4218 6.68119C21.7481 6.24119 21.8104 5.62575 21.9351 4.39488C22.0098 3.65744 22.0471 3.28872 21.8943 3.01578C21.8187 2.8806 21.7123 2.76456 21.5836 2.67677C21.3238 2.49951 20.9485 2.49951 20.198 2.49951Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 7.49951V12.5403C3 16.2923 3 18.1683 4.17157 19.3339C5.34315 20.4995 7.22876 20.4995 11 20.4995H12M21 9.99951V7.49951" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 10.4995H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16.7365 15.6749L16.7365 14.2839C16.7365 14.0784 16.7451 13.8704 16.8187 13.6785C17.0148 13.1678 17.5341 12.4988 18.4796 12.4988C19.4251 12.4988 19.9649 13.1678 20.1609 13.6785C20.2346 13.8704 20.2432 14.0784 20.2432 14.2839L20.2431 15.6749M16.806 21.5003H20.194C21.1914 21.5003 22 20.6934 22 19.698V17.6957C22 16.7003 21.1914 15.8934 20.194 15.8934H16.806C15.8086 15.8934 15 16.7003 15 17.6957V19.698C15 20.6934 15.8086 21.5003 16.806 21.5003Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DeliverySecure02Icon;
