import * as React from "react";
import type { SVGProps } from "react";

interface XVariableCircleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const XVariableCircleIcon = (props: XVariableCircleIconProps) => {
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
        <path d="M16 8.98926C12.8164 8.98926 11.1837 15.0101 8 15.0101" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.54 15.0101C14.7312 15.0101 14.2868 15.0101 13.9458 14.8891C13.7522 14.8203 13.5759 14.7242 13.4256 14.6053C13.1609 14.3962 13.0157 14.0965 12.7254 13.4971L11.2746 10.5022C10.9842 9.90285 10.839 9.60317 10.5744 9.39399C10.424 9.27517 10.2477 9.17904 10.0541 9.11029C9.71317 8.98926 9.26877 8.98926 8.45996 8.98926" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default XVariableCircleIcon;
