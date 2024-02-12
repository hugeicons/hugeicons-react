import * as React from "react";
import type { SVGProps } from "react";

interface Yoga01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Yoga01Icon = (props: Yoga01IconProps) => {
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
        <path d="M9.0923 16C8.78292 16.6819 8.0701 16.986 7.43887 17.3162L3.79262 19.2233C2.32845 19.9891 3.05949 22 4.62985 22C8.12204 22 10.8836 20.3064 14.0404 19C14.835 18.6711 15.2201 18.7415 16 19.0912" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 19.0912C9.77995 18.7415 10.165 18.6711 10.9596 19C14.1164 20.3064 16.878 22 20.3702 22C21.9405 22 22.6715 19.9891 21.2074 19.2233L17.5611 17.3162C16.9299 16.986 16.2171 16.6819 15.9077 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 4C10 5.10457 10.8954 6 12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 8C8.68629 8 6 10.6863 6 14C9.31371 14 12 11.3137 12 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 8C15.3137 8 18 10.6863 18 14C14.6863 14 12 11.3137 12 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Yoga01Icon;
