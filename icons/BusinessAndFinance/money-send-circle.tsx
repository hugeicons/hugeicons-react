import * as React from "react";
import type { SVGProps } from "react";

interface MoneySendCircleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MoneySendCircleIcon = (props: MoneySendCircleIconProps) => {
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
        <path d="M14 2.20004C13.3538 2.06886 12.6849 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 9C10.8954 9 10 9.67157 10 10.5C10 11.3284 10.8954 12 12 12C13.1046 12 14 12.6716 14 13.5C14 14.3284 13.1046 15 12 15M12 9C12.8708 9 13.6116 9.4174 13.8862 10M12 9V8M12 15C11.1292 15 10.3884 14.5826 10.1138 14M12 15V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16.998 7.00195L21.1739 2.82375M21.998 6.48019L21.8798 3.3887C21.8798 2.66006 21.4448 2.20607 20.6523 2.14881L17.5282 2.00195" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default MoneySendCircleIcon;
