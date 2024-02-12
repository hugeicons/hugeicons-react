import * as React from "react";
import type { SVGProps } from "react";

interface LockComputerIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LockComputerIcon = (props: LockComputerIconProps) => {
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
        <path d="M12.9994 2H9.99936C6.22812 2 4.34251 2 3.17093 3.17157C1.99936 4.34315 1.99936 6.22876 1.99936 10C1.99936 13.7712 1.99936 15.6569 3.17093 16.8284C4.34251 18 6.22812 18 9.99936 18H13.9994C17.7706 18 19.6563 18 20.8278 16.8284C21.481 16.1752 21.77 15.3001 21.8979 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11.9994 18V22" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7.99936 22H15.9994" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.9994 15H12.9994" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.7501 5.37591C16.7501 5.3159 16.7487 4.55703 16.7501 4.12245C16.7514 3.72536 16.7165 3.34245 16.9061 2.99205C17.6165 1.57845 19.6565 1.72245 20.1605 3.16245C20.2478 3.39952 20.2531 3.77537 20.2505 4.12245C20.2472 4.56593 20.2565 5.37591 20.2565 5.37591M16.7501 5.37591C15.6701 5.37591 15.2165 6.1559 15.0965 6.63591C14.9765 7.11591 14.9765 8.85591 15.0485 9.57591C15.2885 10.4759 15.8885 10.8479 16.4765 10.9679C17.0165 11.0159 19.2965 10.9979 19.9565 10.9979C20.9165 11.0159 21.6365 10.6559 21.9365 9.57591C21.9965 9.21591 22.0565 7.23591 21.9065 6.6359C21.5885 5.6759 20.8565 5.37591 20.2565 5.37591M16.7501 5.37591H20.2565" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default LockComputerIcon;
