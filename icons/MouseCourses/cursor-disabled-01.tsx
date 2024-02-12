import * as React from "react";
import type { SVGProps } from "react";

interface CursorDisabled01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CursorDisabled01Icon = (props: CursorDisabled01IconProps) => {
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
        <path d="M10 3.32038C6.75053 2.8233 3.67361 2.85605 2.76477 3.76477C0.59286 5.93695 3.42489 20.494 6.53497 20.1912C8.24124 20.0189 9.43225 17.2787 10.8342 16.4228C11.3865 16.0856 11.8761 16.4281 12.222 16.8784L15.569 21.2348C16.1521 21.9939 16.5628 22.2198 17.4421 21.7696C18.7939 21.0775 20.0785 19.7911 20.7696 18.4418C21.2198 17.5628 20.9939 17.152 20.235 16.569L17.5 14.4678" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.318 9.68198C16.0754 11.4393 18.9246 11.4393 20.682 9.68198C22.4393 7.92462 22.4393 5.07538 20.682 3.31802M14.318 9.68198C12.5607 7.92462 12.5607 5.07538 14.318 3.31802C16.0754 1.56066 18.9246 1.56066 20.682 3.31802M14.318 9.68198L20.682 3.31802" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default CursorDisabled01Icon;
