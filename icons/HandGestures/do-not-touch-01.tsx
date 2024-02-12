import * as React from "react";
import type { SVGProps } from "react";

interface DoNotTouch01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DoNotTouch01Icon = (props: DoNotTouch01IconProps) => {
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
        <path d="M17.5 22.0003V20.8357C17.5 19.913 17.9987 19.1864 18.5 18.5M8 22.0003C8 20.883 7.62579 19.527 6.93707 18.6472L3.33738 14.049C2.8758 13.4316 2.88907 12.5792 3.36965 11.9766C3.99772 11.189 5.16877 11.124 5.8797 11.8371L7.5 13.4625V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.5018 5.5C13.5018 4.67157 14.1733 4 15.0018 4C15.8302 4 16.5018 4.67157 16.5018 5.5V7.5M13.5018 5.5V3.5C13.5018 2.67157 12.8302 2 12.0018 2C11.1733 2 10.5018 2.67157 10.5018 3.5L10.502 5M13.5018 5.5V9.50024M10.502 5C10.5016 4.17187 9.83019 3.50117 9.00197 3.50064C8.17376 3.50011 8 4 8 4M10.502 5V6.50045M16.5018 12V7.5M16.5018 7.5C16.5018 6.67157 17.1733 6 18.0018 6C18.8302 6 19.5018 6.67157 19.5018 7.5V13.6668C19.5018 14.3812 19.5018 14.9897 19.49 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 2L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default DoNotTouch01Icon;
