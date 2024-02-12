import * as React from "react";
import type { SVGProps } from "react";

interface Sword01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Sword01Icon = (props: Sword01IconProps) => {
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
        <path d="M2.5 19.5C2.98686 19.5717 3.45571 19.7949 3.83041 20.1696C4.20512 20.5443 4.42832 21.0131 4.5 21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 16L4 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 16.5L19.8538 7.92675C20.1737 7.64942 20.3975 7.27769 20.4927 6.86509L21.5 2.5L17.1349 3.50733C16.7223 3.60254 16.3506 3.82626 16.0732 4.14625L7.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M4 13H4.57157C5.10201 13 5.61071 13.2107 5.98579 13.5858L10.4142 18.0142C10.7893 18.3893 11 18.898 11 19.4284V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Sword01Icon;
