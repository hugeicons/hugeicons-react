import * as React from "react";
import type { SVGProps } from "react";

interface Comet01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Comet01Icon = (props: Comet01IconProps) => {
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
        <path d="M4.05025 10.0498C1.31658 12.7835 1.31658 17.2156 4.05025 19.9493C6.78392 22.683 11.2161 22.683 13.9497 19.9493L17.899 16M12.1001 2L6.5 7.60006M22 11.899L20 13.899" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11.1213 12.8787C12.2929 14.0503 12.2929 15.9497 11.1213 17.1213C9.94975 18.2929 8.05025 18.2929 6.87868 17.1213C5.70711 15.9497 5.70711 14.0503 6.87868 12.8787C8.05025 11.7071 9.94975 11.7071 11.1213 12.8787Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6.87891 12.8795L14 5.75787M17.7576 2L16 3.75772M22 6.24338L15.3639 12.8795" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Comet01Icon;
