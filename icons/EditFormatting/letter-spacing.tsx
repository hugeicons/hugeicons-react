import * as React from "react";
import type { SVGProps } from "react";

interface LetterSpacingIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LetterSpacingIcon = (props: LetterSpacingIconProps) => {
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
        <path d="M2 22V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 22V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 18L10.6534 7.48635C10.9447 6.81279 11.4878 5.99657 11.9467 6.00001C12.6263 6.00511 12.9827 6.70758 13.3774 7.48635C13.7721 8.26513 17 18 17 18M9.01312 12.9912L14.8945 12.9293" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default LetterSpacingIcon;
