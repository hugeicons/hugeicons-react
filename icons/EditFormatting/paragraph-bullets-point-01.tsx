import * as React from "react";
import type { SVGProps } from "react";

interface ParagraphBulletsPoint01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ParagraphBulletsPoint01Icon = (props: ParagraphBulletsPoint01IconProps) => {
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
        <path d="M3.51256 9.48744C4.02513 10 4.85008 10 6.5 10C8.14992 10 8.97487 10 9.48744 9.48744C10 8.97487 10 8.14992 10 6.5C10 4.85008 10 4.02513 9.48744 3.51256C8.97487 3 8.14992 3 6.5 3C4.85008 3 4.02513 3 3.51256 3.51256C3 4.02513 3 4.85008 3 6.5C3 8.14992 3 8.97487 3.51256 9.48744Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.51256 20.4874C4.02513 21 4.85008 21 6.5 21C8.14992 21 8.97487 21 9.48744 20.4874C10 19.9749 10 19.1499 10 17.5C10 15.8501 10 15.0251 9.48744 14.5126C8.97487 14 8.14992 14 6.5 14C4.85008 14 4.02513 14 3.51256 14.5126C3 15.0251 3 15.8501 3 17.5C3 19.1499 3 19.9749 3.51256 20.4874Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 4H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 15H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 9H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 20H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ParagraphBulletsPoint01Icon;
