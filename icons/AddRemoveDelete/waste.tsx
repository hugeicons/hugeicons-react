import * as React from "react";
import type { SVGProps } from "react";

interface WasteIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const WasteIcon = (props: WasteIconProps) => {
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
        <path d="M3.75 5H9.17963C9.84834 5 10.4728 4.6658 10.8437 4.1094L11.6563 2.8906C12.0272 2.3342 12.6517 2 13.3204 2H17.8085C18.6693 2 19.4336 2.55086 19.7058 3.36754L20.25 5M21.75 5H8.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20.25 5L19.6303 14.906C19.6088 15.2333 19.5887 15.5385 19.5685 15.8235M5.25 5L5.85461 14.8966C6.00945 17.3107 6.08688 18.5177 6.72868 19.3857C7.046 19.8149 7.4548 20.1771 7.92905 20.4493C8.8883 21 10.1731 21 12.7427 21H15.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20.75 19C20.75 17.3431 19.4069 16 17.75 16C16.0931 16 14.75 17.3431 14.75 19C14.75 20.6569 16.0931 22 17.75 22C19.4069 22 20.75 20.6569 20.75 19Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default WasteIcon;
