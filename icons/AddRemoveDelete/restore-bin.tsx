import * as React from "react";
import type { SVGProps } from "react";

interface RestoreBinIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const RestoreBinIcon = (props: RestoreBinIconProps) => {
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
        <path d="M20.25 5.5L19.75 11.5M5.25 5.5L5.85461 15.5368C6.00945 18.1073 6.08688 19.3925 6.72868 20.3167C7.046 20.7737 7.4548 21.1594 7.92905 21.4493C8.51127 21.8051 9.21343 21.945 10.25 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11.75 15.5L12.8863 16.9657C13.458 14.8319 15.6514 13.5655 17.7852 14.1373C18.8775 14.43 19.7425 15.1475 20.25 16.0646M21.75 20.5L20.6137 19.0363C20.0419 21.1701 17.8486 22.4365 15.7147 21.8647C14.6478 21.5788 13.7977 20.8875 13.2859 20.001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.75 5.5H21.75M16.8057 5.5L16.1231 4.09173C15.6696 3.15626 15.4428 2.68852 15.0517 2.39681C14.965 2.3321 14.8731 2.27454 14.777 2.2247C14.3439 2 13.8241 2 12.7845 2C11.7188 2 11.186 2 10.7457 2.23412C10.6481 2.28601 10.555 2.3459 10.4673 2.41317C10.0716 2.7167 9.85063 3.20155 9.40861 4.17126L8.80292 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default RestoreBinIcon;
