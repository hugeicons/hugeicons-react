import * as React from "react";
import type { SVGProps } from "react";

interface SecondBracketIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SecondBracketIcon = (props: SecondBracketIconProps) => {
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
        <path d="M17.225 3C18.6145 3.15381 19.5498 3.50143 20.2479 4.28705C21.5 5.69617 21.5 7.96411 21.5 12.5C21.5 17.0359 21.5 19.3038 20.2479 20.713C19.5498 21.4986 18.6145 21.8462 17.225 22M6.77501 22C5.38551 21.8462 4.45021 21.4986 3.75212 20.713C2.5 19.3038 2.5 17.0359 2.5 12.5C2.5 7.96411 2.5 5.69617 3.75212 4.28705C4.45021 3.50143 5.38551 3.15381 6.77501 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SecondBracketIcon;
