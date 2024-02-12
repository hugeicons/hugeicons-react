import * as React from "react";
import type { SVGProps } from "react";

interface DatabaseSync01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DatabaseSync01Icon = (props: DatabaseSync01IconProps) => {
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
        <ellipse cx="10" cy="5" rx="8" ry="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 10.8418C5.60158 11.0226 6.27434 11.1716 7 11.2817" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 17.8418C5.60158 18.0226 6.27434 18.1716 7 18.2817" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 15.4996L13.1363 16.965C13.708 14.8316 15.9014 13.5656 18.0352 14.1373C19.1275 14.4299 19.9925 15.1473 20.5 16.064M22 20.4984L20.8637 19.035C20.2919 21.1684 18.0986 22.4344 15.9647 21.8627C14.8978 21.5769 14.0477 20.8858 13.5359 19.9995" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 5V11.0082M2 5V19.0191C2 20.5511 5.05369 21.8152 9 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12C2 13.5418 5.05369 14.814 9 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default DatabaseSync01Icon;
