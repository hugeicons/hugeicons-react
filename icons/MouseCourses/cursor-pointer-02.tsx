import * as React from "react";
import type { SVGProps } from "react";

interface CursorPointer02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CursorPointer02Icon = (props: CursorPointer02IconProps) => {
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
        <path d="M7.05139 16C4.12629 15.1008 2 12.3774 2 9.15744C2 5.20449 5.20449 2 9.15744 2C12.3774 2 15.1008 4.12629 16 7.05139" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6.44444 10C6.16405 9.58923 6 9.09211 6 8.55652C6 7.14459 7.14007 6 8.54642 6C9.08678 6 9.58783 6.16898 10 6.45717" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9.30945 9.37832C10.7997 7.77346 22.0092 11.7048 22 13.1402C21.9895 14.7678 17.6224 15.2685 16.4119 15.6081C15.684 15.8124 15.489 16.0217 15.3212 16.785C14.561 20.2419 14.1794 21.9613 13.3096 21.9997C11.9231 22.061 7.85508 10.9445 9.30945 9.37832Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default CursorPointer02Icon;
