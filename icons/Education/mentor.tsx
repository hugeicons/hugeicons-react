import * as React from "react";
import type { SVGProps } from "react";

interface MentorIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MentorIcon = (props: MentorIconProps) => {
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
        <path d="M15.59 17.7408C14.9612 18.162 13.3126 19.0221 14.3167 20.0983C14.8072 20.624 15.3536 21 16.0404 21H18H19.9596C20.6464 21 21.1928 20.624 21.6833 20.0983C22.6874 19.0221 21.0388 18.162 20.41 17.7408C18.9355 16.7531 17.0645 16.7531 15.59 17.7408Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 12.5C20 13.6046 19.1046 14.5 18 14.5C16.8954 14.5 16 13.6046 16 12.5C16 11.3954 16.8954 10.5 18 10.5C19.1046 10.5 20 11.3954 20 12.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 6H15M10 3H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 9.5V14C7 14.9428 7 15.4142 6.70711 15.7071C6.41421 16 5.94281 16 5 16H4C3.05719 16 2.58579 16 2.29289 15.7071C2 15.4142 2 14.9428 2 14V11.5C2 10.5572 2 10.0858 2.29289 9.79289C2.58579 9.5 3.05719 9.5 4 9.5H7ZM7 9.5H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.5 5C6.5 6.10457 5.60457 7 4.5 7C3.39543 7 2.5 6.10457 2.5 5C2.5 3.89543 3.39543 3 4.5 3C5.60457 3 6.5 3.89543 6.5 5Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default MentorIcon;
