import * as React from "react";
import type { SVGProps } from "react";

interface Bread01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Bread01Icon = (props: Bread01IconProps) => {
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
        <path d="M3.19405 14.0771C1.94563 15.3083 1.84437 17.6177 2.13655 19.7509C2.40166 21.6865 4.57937 22.5986 6.21199 21.5763C9.1986 19.7062 12.3179 17.2422 15.3067 14.2948C18.3772 11.2667 20.0596 8.96149 21.5435 6.36759C22.4433 4.79469 22.0218 2.69741 20.1997 2.23229C18.2048 1.7231 15.6191 1.93201 13.3375 4.07756M3.19405 14.0771C2.36031 10.3371 5.29027 5.93194 12.1656 9.79436M3.19405 14.0771C3.81736 14.0898 5.21758 14.3718 6.5544 15.3245M6.84592 8.19553C6.90898 6.25493 8.82259 3.00493 13.3375 4.07756M13.3375 4.07756C14.304 4.30718 15.3897 4.73488 16.602 5.41591" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Bread01Icon;
