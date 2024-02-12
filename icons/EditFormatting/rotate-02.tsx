import * as React from "react";
import type { SVGProps } from "react";

interface Rotate02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Rotate02Icon = (props: Rotate02IconProps) => {
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
        <path d="M20 2V5.13219C20 5.42605 19.6328 5.55908 19.4447 5.33333C17.6146 3.2875 14.955 2 11.9949 2C6.47485 2 2 6.47715 2 12C2 15.9582 4.29852 19.3793 7.63298 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.265 22C11.7982 22 11.3387 21.9687 10.8887 21.9083M21.7344 8.66663C21.8468 9.06381 21.935 9.46524 21.9998 9.86888M21.9652 13.538C21.8949 13.938 21.8033 14.3341 21.6913 14.7244M20.1669 17.9962C19.9285 18.3496 19.6702 18.6898 19.3927 19.0146M16.5712 21.3606C16.2175 21.5631 15.8494 21.7463 15.4675 21.9083" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Rotate02Icon;
