import * as React from "react";
import type { SVGProps } from "react";

interface AlphaSquareIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AlphaSquareIcon = (props: AlphaSquareIconProps) => {
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
        <path d="M15.0011 8C15.1077 8.8641 15.0011 10.2323 14.6013 11.8284C14.2548 12.9686 13.1621 16.2569 10.3236 15.9809C7.87156 15.6569 6.84544 13.2566 7.01868 11.6844C7.08531 10.3643 8.07145 8.036 10.6967 8C13.0554 8.20402 13.6551 10.2082 13.9883 11.9004C14.3481 13.4606 14.3081 14.2287 14.9078 15.2968C15.2676 15.8849 15.9472 16.1009 16.4936 15.9569C16.9334 15.7769 17 15.3928 17 15.1048" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default AlphaSquareIcon;
