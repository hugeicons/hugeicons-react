import * as React from "react";
import type { SVGProps } from "react";

interface ConversationIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ConversationIcon = (props: ConversationIconProps) => {
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
        <path d="M7 6V5C7 3.58579 7 2.87868 7.43934 2.43934C7.87868 2 8.58579 2 10 2H14C15.4142 2 16.1213 2 16.5607 2.43934C17 2.87868 17 3.58579 17 5V6C17 7.41421 17 8.12132 16.5607 8.56066C16.1213 9 15.4142 9 14 9H13L10 11V9C8.58579 9 7.87868 9 7.43934 8.56066C7 8.12132 7 7.41421 7 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M3.59003 18.7408C2.96125 19.162 1.31261 20.0221 2.31674 21.0983C2.80725 21.624 3.35355 22 4.04039 22H6H7.95961C8.64645 22 9.19275 21.624 9.68326 21.0983C10.6874 20.0221 9.03875 19.162 8.40997 18.7408C6.93547 17.7531 5.06453 17.7531 3.59003 18.7408Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15.59 18.7408C14.9612 19.162 13.3126 20.0221 14.3167 21.0983C14.8072 21.624 15.3536 22 16.0404 22H18H19.9596C20.6464 22 21.1928 21.624 21.6833 21.0983C22.6874 20.0221 21.0388 19.162 20.41 18.7408C18.9355 17.7531 17.0645 17.7531 15.59 18.7408Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 13.5C8 14.6046 7.10457 15.5 6 15.5C4.89543 15.5 4 14.6046 4 13.5C4 12.3954 4.89543 11.5 6 11.5C7.10457 11.5 8 12.3954 8 13.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 13.5C20 14.6046 19.1046 15.5 18 15.5C16.8954 15.5 16 14.6046 16 13.5C16 12.3954 16.8954 11.5 18 11.5C19.1046 11.5 20 12.3954 20 13.5Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default ConversationIcon;
