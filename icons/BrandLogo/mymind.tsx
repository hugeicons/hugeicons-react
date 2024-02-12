import * as React from "react";
import type { SVGProps } from "react";

interface MymindIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MymindIcon = (props: MymindIconProps) => {
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
        <path d="M19.4956 10.106C21.0362 15.5278 18.9292 20.7711 14.7894 21.8171C10.6497 22.8631 6.04495 19.3158 4.50438 13.894C2.96382 8.47215 5.07084 3.22891 9.21056 2.18289C13.3503 1.13686 17.9551 4.68416 19.4956 10.106Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M13.3187 15.9425L11.5 7L16.1503 14.774C16.4156 15.2176 16.5483 15.4394 16.484 15.653C16.4197 15.8667 16.1856 15.9817 15.7176 16.2119L14.8084 16.6589C14.2473 16.9348 13.9667 17.0728 13.735 16.9613C13.5033 16.8498 13.4417 16.5474 13.3187 15.9425Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="8.5" cy="11" r="1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default MymindIcon;
