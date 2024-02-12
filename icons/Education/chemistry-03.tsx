import * as React from "react";
import type { SVGProps } from "react";

interface Chemistry03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Chemistry03Icon = (props: Chemistry03IconProps) => {
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
        <path d="M5 3V13C5 16.7712 5 18.6569 6.17157 19.8284C7.34315 21 9.22876 21 13 21H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 9L11 9M20 9H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.5 4L16.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.7 4V8.95233C11.7 9.35352 11.4544 9.70728 11.1119 9.91618C9.84338 10.6899 9 12.0617 9 13.625C9 16.0412 11.0147 18 13.5 18C15.9853 18 18 16.0412 18 13.625C18 12.0617 17.1566 10.6899 15.8881 9.91618C15.5456 9.70728 15.3 9.35352 15.3 8.95233V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Chemistry03Icon;
