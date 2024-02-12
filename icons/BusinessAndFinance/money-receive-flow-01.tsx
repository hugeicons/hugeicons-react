import * as React from "react";
import type { SVGProps } from "react";

interface MoneyReceiveFlow01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MoneyReceiveFlow01Icon = (props: MoneyReceiveFlow01IconProps) => {
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
        <path d="M12 2V6M8 4L8 6M16 4V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19 6.5C19.7745 6.66593 20.3588 6.94287 20.8284 7.40508C22 8.55821 22 10.4141 22 14.126C22 17.8378 22 19.6938 20.8284 20.8469C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8469C2 19.6938 2 17.8378 2 14.126C2 10.4141 2 8.55821 3.17157 7.40508C3.64118 6.94287 4.2255 6.66593 5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18.5 14H18.491" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.50996 14H5.50098" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.5 14C14.5 15.3807 13.3807 16.5 12 16.5C10.6193 16.5 9.5 15.3807 9.5 14C9.5 12.6193 10.6193 11.5 12 11.5C13.3807 11.5 14.5 12.6193 14.5 14Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default MoneyReceiveFlow01Icon;
