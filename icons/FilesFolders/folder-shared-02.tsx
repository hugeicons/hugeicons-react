import * as React from "react";
import type { SVGProps } from "react";

interface FolderShared02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FolderShared02Icon = (props: FolderShared02IconProps) => {
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
        <path d="M7.0111 6.50046H16.7828C18.8941 6.50046 19.9498 6.50046 20.7082 7.00611C21.0365 7.22501 21.3183 7.5063 21.5377 7.83391C21.8193 8.2545 21.9444 8.76675 22 9.50058M12.0222 6.50046L11.3874 5.23344C10.8614 4.18377 10.3808 3.12719 9.21524 2.69103C8.70475 2.5 8.12159 2.5 6.95525 2.5C5.13475 2.5 4.22449 2.5 3.54148 2.88036C3.0546 3.1515 2.65287 3.55239 2.38116 4.03824C2 4.71982 2 5.62816 2 7.44484V10.5009C2 15.2155 2 17.5728 3.46772 19.0374C4.77047 20.3375 6.76141 20.4836 10.5 20.5H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19.1581 14.671C19.4043 15.1625 19.9128 15.5 20.5 15.5C21.3284 15.5 22 14.8284 22 14C22 13.1716 21.3284 12.5 20.5 12.5C19.6716 12.5 19 13.1716 19 14C19 14.2412 19.0569 14.4691 19.1581 14.671ZM19.1581 14.671L15.8419 16.329M15.8419 16.329C15.5957 15.8375 15.0872 15.5 14.5 15.5C13.6716 15.5 13 16.1716 13 17C13 17.8284 13.6716 18.5 14.5 18.5C15.0872 18.5 15.5957 18.1625 15.8419 17.671M15.8419 16.329C15.9431 16.5309 16 16.7588 16 17C16 17.2412 15.9431 17.4691 15.8419 17.671M19.1581 19.329C19.0569 19.5309 19 19.7588 19 20C19 20.8284 19.6716 21.5 20.5 21.5C21.3284 21.5 22 20.8284 22 20C22 19.1716 21.3284 18.5 20.5 18.5C19.9128 18.5 19.4043 18.8375 19.1581 19.329ZM19.1581 19.329L15.8419 17.671" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default FolderShared02Icon;
