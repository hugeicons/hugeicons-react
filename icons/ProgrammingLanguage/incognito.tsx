import * as React from "react";
import type { SVGProps } from "react";

interface IncognitoIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const IncognitoIcon = (props: IncognitoIconProps) => {
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
        <path d="M10 18C10 16.3431 8.65685 15 7 15C5.34315 15 4 16.3431 4 18C4 19.6569 5.34315 21 7 21C8.65685 21 10 19.6569 10 18Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 18C20 16.3431 18.6569 15 17 15C15.3431 15 14 16.3431 14 18C14 19.6569 15.3431 21 17 21C18.6569 21 20 19.6569 20 18Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.5 16.3411C13.9625 15.5328 13.0435 15 12 15C10.9565 15 10.0375 15.5328 9.5 16.3411" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 12L4.66166 5.70282C4.75853 5.33572 4.80697 5.15216 4.85375 5.02203C5.53545 3.12569 7.7632 2.40106 9.37283 3.55208C9.48328 3.63107 9.6247 3.75287 9.90752 3.99647C10.0699 4.13634 10.1511 4.20629 10.2264 4.26331C11.2822 5.06317 12.7178 5.06317 13.7736 4.26331C13.8489 4.20629 13.9301 4.13635 14.0925 3.99647C14.3753 3.75287 14.5167 3.63107 14.6272 3.55208C16.2368 2.40106 18.4645 3.12569 19.1463 5.02203C19.193 5.15216 19.2415 5.33571 19.3383 5.70282L21 12H3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default IncognitoIcon;
