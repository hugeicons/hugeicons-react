import * as React from "react";
import type { SVGProps } from "react";

interface DragRight04IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DragRight04Icon = (props: DragRight04IconProps) => {
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
        <path d="M18.9976 13.0526V13.2264M18.9976 13.2264C18.9976 12.3517 18.355 11.6051 17.4783 11.4613L16.2703 11.2632V12.1579M18.9976 13.2264V15.4386C18.9976 17.3832 18.9976 18.3555 18.6966 19.1296C18.2364 20.3132 17.2891 21.2485 16.0902 21.7029C15.3062 22 14.3214 22 12.3518 22C11.3189 22 10.8024 22 10.3218 21.8957C9.58842 21.7366 8.90666 21.4 8.33773 20.9163C7.96482 20.5992 7.65493 20.1913 7.03517 19.3755L4.30427 15.7805C3.88465 15.2281 3.89672 14.4654 4.33361 13.9262C4.90458 13.2215 5.96917 13.1633 6.61547 13.8014L7.99756 15.2557V6.5C7.99756 5.67157 8.66913 5 9.49756 5C10.326 5 10.9976 5.67157 10.9976 6.5V9.4737M16.2703 12.1579C16.2703 11.1696 15.4563 10.3684 14.4521 10.3684H13.5431V11.2632M16.2703 12.1579V13.0526M10.9976 9.4737H11.7249C12.729 9.4737 13.5431 10.2749 13.5431 11.2632M10.9976 9.4737V12.1579M13.5431 11.2632V12.1579" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.4356 9.5C12.6653 8.81764 13.4976 7.50601 13.4976 6C13.4976 3.79086 11.7067 2 9.49756 2C7.28842 2 5.49756 3.79086 5.49756 6C5.49756 7.50601 6.32985 8.81764 7.55956 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18.0183 3.99561L19.7618 5.43632C20.0169 5.70828 20.0595 5.91336 19.9337 6.21471C19.8881 6.32386 19.8107 6.41604 19.7222 6.49449L18.0183 8.00446M13.8506 5.98052H18.8351" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DragRight04Icon;
