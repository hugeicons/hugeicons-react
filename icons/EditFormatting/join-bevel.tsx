import * as React from "react";
import type { SVGProps } from "react";

interface JoinBevelIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const JoinBevelIcon = (props: JoinBevelIconProps) => {
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
        <path d="M14.999 13L17.999 13C19.8846 13 20.8274 13 21.4132 13.5858C21.999 14.1716 21.999 15.1144 21.999 17V18C21.999 19.8856 21.999 20.8284 21.4132 21.4142C20.8274 22 19.8846 22 17.999 22H10.6559C9.83838 22 9.42963 22 9.06208 21.8478C8.69454 21.6955 8.40551 21.4065 7.82745 20.8284L3.1706 16.1716C2.59254 15.5935 2.30351 15.3045 2.15126 14.9369C1.99902 14.5694 1.99902 14.1606 1.99902 13.3431L1.99902 6C1.99902 4.11438 1.99902 3.17157 2.58481 2.58579C3.1706 2 4.1134 2 5.99902 2L6.99902 2C8.88464 2 9.82745 2 10.4132 2.58579C10.999 3.17157 10.999 4.11438 10.999 6V9C10.999 10.8856 10.999 11.8284 11.5848 12.4142C12.1706 13 13.1134 13 14.999 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default JoinBevelIcon;
