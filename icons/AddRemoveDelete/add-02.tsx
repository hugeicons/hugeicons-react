import * as React from "react";
import type { SVGProps } from "react";

interface Add02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Add02Icon = (props: Add02IconProps) => {
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
        <path d="M14.2361 5.29178C14.2361 4.77191 14.2361 4.51198 14.1789 4.29871C14.0239 3.71997 13.5718 3.26793 12.9931 3.11285C12.4315 2.96238 11.5685 2.96238 11.0069 3.11285C10.4282 3.26793 9.97615 3.71997 9.82107 4.29871C9.76393 4.51198 9.76393 4.77191 9.76393 5.29178C9.76393 6.34588 9.76393 9.109 9.43647 9.43647C9.109 9.76393 6.34588 9.76393 5.29178 9.76393C4.77191 9.76393 4.51198 9.76393 4.29871 9.82107C3.71997 9.97615 3.26793 10.4282 3.11285 11.0069C2.96238 11.5685 2.96238 12.4315 3.11285 12.9931C3.26793 13.5718 3.71997 14.0239 4.29871 14.1789C4.51198 14.2361 4.77191 14.2361 5.29178 14.2361C6.34588 14.2361 9.109 14.2361 9.43647 14.5635C9.76393 14.891 9.76393 15.418 9.76393 16.4721C9.76393 16.992 9.76393 19.4881 9.82107 19.7013C9.97615 20.28 10.4282 20.7321 11.0069 20.8871C11.5685 21.0376 12.4315 21.0376 12.9931 20.8871C13.5718 20.7321 14.0239 20.28 14.1789 19.7013C14.2361 19.4881 14.2361 16.992 14.2361 16.4721C14.2361 15.418 14.2361 14.891 14.5635 14.5635C14.891 14.2361 17.6541 14.2361 18.7082 14.2361C19.2281 14.2361 19.4881 14.2361 19.7013 14.1789C20.28 14.0239 20.7321 13.5718 20.8871 12.9931C21.0376 12.4315 21.0376 11.5685 20.8871 11.0069C20.7321 10.4282 20.28 9.97615 19.7013 9.82107C19.4881 9.76393 19.2281 9.76393 18.7082 9.76393C17.6541 9.76393 14.891 9.76393 14.5635 9.43647C14.2361 9.109 14.2361 6.34588 14.2361 5.29178Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Add02Icon;
