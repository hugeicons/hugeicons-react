import * as React from "react";
import type { SVGProps } from "react";

interface LastFmIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LastFmIcon = (props: LastFmIconProps) => {
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
        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M11.0714 15.0318C10.5251 15.3296 9.89082 15.5 9.21429 15.5C7.16294 15.5 5.5 13.933 5.5 12C5.5 10.067 7.16294 8.5 9.21429 8.5C11.4777 8.66528 12.1577 10.6609 12.5678 12C13.4964 15.0318 15.6172 15.5 16.6429 15.5C17.6685 15.5 18.5 14.7165 18.5 13.75C18.5 12.7835 17.6685 12 16.6429 12C15.6172 12 14.7857 11.2165 14.7857 10.25C14.7857 9.2835 15.6172 8.5 16.6429 8.5C17.5759 8.5 18.3483 9.14843 18.4801 9.99317" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default LastFmIcon;
