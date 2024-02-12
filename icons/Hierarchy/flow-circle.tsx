import * as React from "react";
import type { SVGProps } from "react";

interface FlowCircleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FlowCircleIcon = (props: FlowCircleIconProps) => {
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
        <path d="M18 4.5C18 5.88071 16.8807 7 15.5 7C14.1193 7 13 5.88071 13 4.5C13 3.11929 14.1193 2 15.5 2C16.8807 2 18 3.11929 18 4.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 19.5C18 20.8807 16.8807 22 15.5 22C14.1193 22 13 20.8807 13 19.5C13 18.1193 14.1193 17 15.5 17C16.8807 17 18 18.1193 18 19.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 12C10 14.2091 8.20914 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C8.20914 8 10 9.79086 10 12Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M22 4.50012L18 4.50003M6 7.99994C6 6.59548 6 5.89325 6.33706 5.3888C6.48298 5.17042 6.67048 4.98292 6.88886 4.837C7.39331 4.49994 8.09554 4.49994 9.5 4.49994H13M22 19.5002L18 19.5001M6 16.0002C6 17.4047 6 18.1069 6.33706 18.6114C6.48298 18.8298 6.67048 19.0173 6.88886 19.1632C7.39331 19.5002 8.09554 19.5002 9.5 19.5002H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FlowCircleIcon;
