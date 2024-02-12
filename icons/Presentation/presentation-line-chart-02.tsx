import * as React from "react";
import type { SVGProps } from "react";

interface PresentationLineChart02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PresentationLineChart02Icon = (props: PresentationLineChart02IconProps) => {
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
        <path d="M8.5 22L8.82821 21.6717C9.40628 21.0936 9.69532 20.8045 10.0629 20.6523C10.4305 20.5 10.8392 20.5 11.6568 20.5H12.343C13.1605 20.5 13.5692 20.5 13.9368 20.6522C14.3043 20.8045 14.5933 21.0935 15.1714 21.6716L15.4998 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 17.5V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default PresentationLineChart02Icon;
