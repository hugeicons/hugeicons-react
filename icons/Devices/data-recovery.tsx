import * as React from "react";
import type { SVGProps } from "react";

interface DataRecoveryIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DataRecoveryIcon = (props: DataRecoveryIconProps) => {
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
        <path d="M3 12C3 13.6569 6.58172 15 11 15C11.3387 15 11.6724 14.9921 12 14.9768" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19 5V11.5M3 5V19C3 20.6569 6.58172 22 11 22C11.3387 22 11.6724 21.9921 12 21.9768" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <ellipse cx="11" cy="5" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 8V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 15V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19.9868 14L20.4861 16.0844L19.6566 15.5661C19.0657 15.1173 18.3313 14.8512 17.5354 14.8512C15.5828 14.8512 14 16.4515 14 18.4256C14 20.3997 15.5828 22 17.5354 22C19.2457 22 20.6724 20.772 21 19.1405" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DataRecoveryIcon;
