import * as React from "react";
import type { SVGProps } from "react";

interface NoteRemoveIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const NoteRemoveIcon = (props: NoteRemoveIconProps) => {
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
        <path d="M16 2V4M11 2V4M6 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.5 12.5V10C19.5 6.70017 19.5 5.05025 18.4749 4.02513C17.4497 3 15.7998 3 12.5 3H9.5C6.20017 3 4.55025 3 3.52513 4.02513C2.5 5.05025 2.5 6.70017 2.5 10V15C2.5 18.2998 2.5 19.9497 3.52513 20.9749C4.55025 22 6.20017 22 9.5 22H11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.5 15L18 18.5M18 18.5L14.5 22M18 18.5L21.5 22M18 18.5L14.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 15H11M7 10H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default NoteRemoveIcon;
