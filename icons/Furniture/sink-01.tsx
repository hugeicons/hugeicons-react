import * as React from "react";
import type { SVGProps } from "react";

interface Sink01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Sink01Icon = (props: Sink01IconProps) => {
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
        <path d="M12 14C15.2069 14 17.9143 11.8786 18.7734 8.97359C19.0045 8.192 19.1201 7.80121 18.8177 7.4006C18.5152 7 18.0239 7 17.0413 7H6.9587C5.9761 7 5.4848 7 5.18234 7.4006C4.87988 7.80121 4.99545 8.192 5.22659 8.97359C6.08569 11.8786 8.79306 14 12 14Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13 7V3.5C13 2.67157 13.6716 2 14.5 2C15.3284 2 16 2.67157 16 3.5V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 7V6C10 5.05719 10 4.58579 9.70711 4.29289C9.41421 4 8.94281 4 8 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.5 14L14 22M9.5 14L10 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 22H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Sink01Icon;
