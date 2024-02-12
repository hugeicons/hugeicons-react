import * as React from "react";
import type { SVGProps } from "react";

interface Bookmark03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Bookmark03Icon = (props: Bookmark03IconProps) => {
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
        <path d="M12 22C7.75736 22 5.63604 22 4.31802 20.5355C3 19.0711 3 16.714 3 12C3 7.28596 3 4.92893 4.31802 3.46447C5.63604 2 7.75736 2 12 2C16.2426 2 18.364 2 19.682 3.46447C21 4.92893 21 7.28595 21 12C21 16.714 21 19.0711 19.682 20.5355C18.364 22 16.2426 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 2.5V9.82621C8 11.0733 8 11.6969 8.38642 11.9201C9.13473 12.3523 10.5384 10.9103 11.205 10.4761C11.5916 10.2243 11.7849 10.0984 12 10.0984C12.2151 10.0984 12.4084 10.2243 12.795 10.4761C13.4616 10.9103 14.8653 12.3523 15.6136 11.9201C16 11.6969 16 11.0733 16 9.82621V2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Bookmark03Icon;
