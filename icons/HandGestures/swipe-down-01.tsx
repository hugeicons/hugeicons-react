import * as React from "react";
import type { SVGProps } from "react";

interface SwipeDown01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SwipeDown01Icon = (props: SwipeDown01IconProps) => {
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
        <path d="M18.5 8V2M18.5 8C17.7998 8 16.4915 6.0057 16 5.5M18.5 8C19.2002 8 20.5085 6.0057 21 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.8348 22L7.8348 21.0513C7.8348 20.4058 7.6261 19.7775 7.23964 19.2595L3.58206 14.3566C3.16022 13.7911 2.8233 13.0896 3.1018 12.4419C3.55264 11.3935 4.82458 10.7124 6.38144 12.2843L7.97865 13.9937L7.97865 3.57057C8.03487 1.52742 11.3229 1.42614 11.4635 3.57057L11.4635 9.5106C12.9435 9.31946 19.9155 10.3629 18.8993 14.7831C18.851 14.9931 18.8028 15.2063 18.7557 15.4165C18.5501 16.3353 17.9422 17.9727 17.2719 18.93C16.5741 19.9266 16.8203 20.9192 16.8203 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SwipeDown01Icon;
