import * as React from "react";
import type { SVGProps } from "react";

interface PokemonIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PokemonIcon = (props: PokemonIconProps) => {
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
        <path d="M12 21C16.4183 21 20 19.2091 20 17C20 16.0234 19.1597 15.468 18.9475 14.5886C18.8278 14.0928 19 13.5112 19 13C19 11.8639 18.7293 10.7909 18.2489 9.84218C20.1255 8.21287 22 5.60644 22 3C17.8474 3 15.7434 5.3492 15.0997 6.72194C13.1658 5.76534 10.8342 5.76534 8.90035 6.72194C8.25655 5.3492 6.15258 3 2 3C2 5.60644 3.87445 8.21287 5.75106 9.84218C5.27067 10.7909 5 11.8639 5 13C5 13.5112 5.17216 14.0928 5.05251 14.5886C4.8403 15.468 4 16.0234 4 17C4 19.2091 7.58172 21 12 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M11 16C11.7925 16.6596 12.206 16.6737 13 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.00019 12.5H8.99121" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.008 12.5H14.999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.1084 14.0234C6.36213 14.4246 8.19257 16.7315 5.78541 18.9381" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.8921 14.0427C17.6384 14.4439 15.8079 16.7508 18.2151 18.9573" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default PokemonIcon;
