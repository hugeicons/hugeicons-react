import * as React from "react";
import type { SVGProps } from "react";

interface ArtificialIntelligence07IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ArtificialIntelligence07Icon = (props: ArtificialIntelligence07IconProps) => {
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
        <path d="M12.9975 2C12.2807 2 11.4115 2.00014 11.1417 2.18897C10.8719 2.3778 10.7586 2.70794 10.5319 3.36821C10.2741 4.11444 10.0907 4.88896 9.37365 5.33402L9.02591 5.52847C8.14318 5.968 7.24422 5.59437 6.36398 5.35409C5.90591 5.22812 5.46423 5.19037 5.19349 5.17992C5.02518 5.17342 4.87158 5.26434 4.78471 5.40865L3.14013 8.1405C3.05375 8.284 3.04481 8.46119 3.12854 8.60625C3.25445 8.82437 3.47078 9.16123 3.76219 9.4753C4.4564 10.2274 5.27129 10.8941 5.27129 12.0038C5.27129 13.1136 4.45653 13.7802 3.76219 14.5325C3.47079 14.8466 3.25446 15.1835 3.12855 15.4016C3.04481 15.5467 3.05375 15.7239 3.14014 15.8674L4.7847 18.5992C4.87158 18.7435 5.0252 18.8344 5.19352 18.8279C5.46426 18.8174 5.90594 18.7797 6.364 18.6537C7.24433 18.4134 8.14332 18.0398 9.02609 18.4794L9.3738 18.6739C10.0908 19.1191 10.2742 19.8934 10.5319 20.6397C10.7586 21.3 10.8719 21.6301 11.1417 21.8189C11.4115 22.0078 12.2807 22 12.9975 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12.998 15.5C11.065 15.5 9.49805 13.933 9.49805 12C9.49805 10.067 11.065 8.5 12.998 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20.248 4.75L17.998 7H15.998M19.498 4.75C19.498 5.16421 19.8338 5.5 20.248 5.5C20.6622 5.5 20.998 5.16421 20.998 4.75C20.998 4.33579 20.6622 4 20.248 4C19.8338 4 19.498 4.33579 19.498 4.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.248 19.25L17.998 17H15.998M19.498 19.25C19.498 18.8358 19.8338 18.5 20.248 18.5C20.6622 18.5 20.998 18.8358 20.998 19.25C20.998 19.6642 20.6622 20 20.248 20C19.8338 20 19.498 19.6642 19.498 19.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.248 12H15.998M19.498 12C19.498 12.4142 19.8338 12.75 20.248 12.75C20.6622 12.75 20.998 12.4142 20.998 12C20.998 11.5858 20.6622 11.25 20.248 11.25C19.8338 11.25 19.498 11.5858 19.498 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ArtificialIntelligence07Icon;
