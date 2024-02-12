import * as React from "react";
import type { SVGProps } from "react";

interface PresentationLineChart01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PresentationLineChart01Icon = (props: PresentationLineChart01IconProps) => {
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
        <path d="M2.5 8C2.5 5.17157 2.5 3.75736 3.37868 2.87868C4.25736 2 5.67157 2 8.5 2H15.5C18.3284 2 19.7426 2 20.6213 2.87868C21.5 3.75736 21.5 5.17157 21.5 8V11C21.5 13.8284 21.5 15.2426 20.6213 16.1213C19.7426 17 18.3284 17 15.5 17H8.5C5.67157 17 4.25736 17 3.37868 16.1213C2.5 15.2426 2.5 13.8284 2.5 11V8Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 9.7246L8.69655 8.81009C9.57522 7.65647 11.1291 7.74842 11.9058 8.99998C12.6564 10.2094 14.1427 10.3437 15.0402 9.28321L16 8.1491" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 22L12.0001 19L17 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 17.5V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default PresentationLineChart01Icon;
