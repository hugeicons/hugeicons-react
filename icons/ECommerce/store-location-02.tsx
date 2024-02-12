import * as React from "react";
import type { SVGProps } from "react";

interface StoreLocation02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const StoreLocation02Icon = (props: StoreLocation02IconProps) => {
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
        <path d="M2.97656 10.5146V15.009C2.97656 17.8339 2.97656 19.2463 3.85621 20.1239C4.73585 21.0015 6.15162 21.0015 8.98315 21.0015H12.9875" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6.98145 17.0066H10.9858" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18.4941 13.5107C20.4292 13.5107 21.9979 15.0464 21.9979 16.9408C21.9979 19.0836 19.8799 20.1371 18.8695 21.7433C18.6542 22.0857 18.3495 22.0857 18.1187 21.7433C17.0767 20.1981 14.9902 19.0389 14.9902 16.9408C14.9902 15.0464 16.559 13.5107 18.4941 13.5107Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M18.4941 17.0066H18.5031" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.7957 2.00254L6.14983 2.03002C4.41166 1.94542 3.966 3.2116 3.966 3.83056C3.966 4.38414 3.89055 5.19117 2.82524 6.70798C1.75993 8.22478 1.83998 8.67537 2.44071 9.72544C2.93928 10.5969 4.20741 10.9374 4.86862 10.9946C6.96883 11.0398 7.99065 9.32381 7.99065 8.1178C9.03251 11.1481 11.9955 11.1481 13.3158 10.8016C14.6385 10.4545 15.7717 9.2118 16.0391 8.1178C16.195 9.47735 16.6682 10.2707 18.0663 10.8158C19.5145 11.3805 20.7599 10.5174 21.3848 9.9642C22.0096 9.41096 22.4107 8.18278 21.2967 6.83288C20.5285 5.90195 20.2084 5.02494 20.1032 4.11599C20.0423 3.58931 19.9888 3.02336 19.5971 2.66323C19.0247 2.13691 18.2035 1.97722 17.7957 2.00254Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default StoreLocation02Icon;
