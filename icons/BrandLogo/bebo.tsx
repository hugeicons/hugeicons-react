import * as React from "react";
import type { SVGProps } from "react";

interface BeboIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BeboIcon = (props: BeboIconProps) => {
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
        <path d="M12 18C14.2091 18 16 16.2091 16 14C16 11.9 14.6758 10.5691 12.5661 10.1461C11.713 9.97507 11 9.29474 11 8.42476C11 7.11978 12.0676 6.03085 13.3523 6.26034C17.4783 6.99743 20 9.75593 20 14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14V4C4 2.89543 4.89543 2 6 2C7.10457 2 8 2.89543 8 4V14C8 16.2091 9.79086 18 12 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BeboIcon;
