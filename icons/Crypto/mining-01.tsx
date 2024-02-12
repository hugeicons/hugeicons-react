import * as React from "react";
import type { SVGProps } from "react";

interface Mining01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Mining01Icon = (props: Mining01IconProps) => {
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
        <path d="M8 17C6.89543 17 6 17.8954 6 19C6 20.1046 6.89543 21 8 21C9.10457 21 10 20.1046 10 19C10 17.8954 9.10457 17 8 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.874 8C12.9562 7.68038 13 7.3453 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 7.3453 5.04375 7.68038 5.12602 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.751 3.00765C14.8334 3.00257 14.9166 3 15.0003 3C17.2095 3 19.0003 4.79086 19.0003 7C19.0003 7.3453 18.9566 7.68038 18.8743 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 17C14.8954 17 14 17.8954 14 19C14 20.1046 14.8954 21 16 21C17.1046 21 18 20.1046 18 19C18 17.8954 17.1046 17 16 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 19H10M18 19C18.2471 19 18.4484 19.0074 18.5551 19C19.9616 18.9022 21.1151 17.8548 21.3411 16.4809C21.3583 16.3767 21.3695 16.2552 21.3918 16.0123L21.9288 10.1811C22.0227 9.16124 22.0697 8.65132 21.7684 8.32566C21.4672 8 20.9485 8 19.9112 8H4.08879C3.05147 8 2.53281 8 2.23155 8.32566C1.9303 8.65132 1.97726 9.16124 2.07117 10.1811L2.60816 16.0123C2.63053 16.2552 2.64171 16.3767 2.65885 16.4809C2.88486 17.8548 4.11626 18.8948 5.52272 18.9926C5.62936 19 5.75291 19 6 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Mining01Icon;
