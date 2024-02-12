import * as React from "react";
import type { SVGProps } from "react";

interface SpeechToTextIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SpeechToTextIcon = (props: SpeechToTextIconProps) => {
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
        <path d="M16 17H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 4V8M5 2V10M2 5L2 7M11 5V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4.00006 13C4.00172 17.1517 4.04756 19.2749 5.31802 20.6124C6.63604 22 8.75736 22 13 22H13.45C17.2568 22 19.1601 22 20.4225 20.8649C20.6018 20.7038 20.7687 20.528 20.9218 20.3393C22 19.0103 22 17.0065 22 12.9989C22 8.99125 22 6.98744 20.9218 5.65845C20.7687 5.46974 20.6018 5.29398 20.4225 5.1328C19.3191 4.14066 17.7259 4.01573 14.8 4H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default SpeechToTextIcon;
