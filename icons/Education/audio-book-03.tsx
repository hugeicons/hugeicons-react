import * as React from "react";
import type { SVGProps } from "react";

interface AudioBook03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AudioBook03Icon = (props: AudioBook03IconProps) => {
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
        <path d="M6.99805 4.95508H15.498C16.3264 4.95508 16.998 5.62833 16.998 6.45884V7.96261" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.9982 19.073V15.8998C20.9982 14.1262 20.9982 13.2394 20.4581 13.0187C19.9179 12.798 19.2822 13.425 18.0108 14.6792C17.3489 15.332 16.9642 15.4724 16.0399 15.4724C15.2206 15.4724 14.811 15.4724 14.5167 15.6664C13.9132 16.0642 13.9982 16.8475 13.9982 17.4864C13.9982 18.1253 13.9132 18.9085 14.5167 19.3063C14.811 19.5003 15.2206 19.5003 16.0399 19.5003C16.9642 19.5003 17.3489 19.6408 18.0108 20.2936C19.2822 21.5478 19.9179 22.1748 20.4581 21.9541C20.9982 21.7334 20.9982 20.8466 20.9982 19.073Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.0069 2.00195L5.80952 2.00197C5.31223 2.00197 4.8036 2.07456 4.40163 2.36805C3.12706 3.29866 2.14483 5.37412 4.12838 7.24791C4.68532 7.77404 5.4638 7.96477 6.22905 7.96477H17.7932C18.5873 7.96477 20.0112 8.0778 20.0112 10.4894M3.0061 5.15353L3.03962 17.9981C3.1663 20.3583 4.77003 21.9085 6.97508 21.9085H11.9519" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default AudioBook03Icon;
