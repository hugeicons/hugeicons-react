import * as React from "react";
import type { SVGProps } from "react";

interface Projector01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Projector01Icon = (props: Projector01IconProps) => {
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
        <path d="M11.5 10H6.5C4.62513 10 3.6877 10 3.03054 10.4775C2.8183 10.6317 2.63166 10.8183 2.47746 11.0305C2 11.6877 2 12.6251 2 14.5C2 16.3749 2 17.3123 2.47746 17.9695C2.63166 18.1817 2.8183 18.3683 3.03054 18.5225C3.6877 19 4.62513 19 6.5 19H17.5C19.3749 19 20.3123 19 20.9695 18.5225C21.1817 18.3683 21.3683 18.1817 21.5225 17.9695C22 17.3123 22 16.3749 22 14.5C22 12.6251 22 11.6877 21.5225 11.0305C21.3683 10.8183 21.1817 10.6317 20.9695 10.4775C20.5172 10.1488 19.9321 10.0464 19 10.0145" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5.49981 13.5H5.50879" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="15.5" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6.5 19L5 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17.5 19L19 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12.5 5L11.5 4M19.5 4L18.5 5M15.5 4V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Projector01Icon;
