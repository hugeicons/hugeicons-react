import * as React from "react";
import type { SVGProps } from "react";

interface Share03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Share03Icon = (props: Share03IconProps) => {
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
        <path d="M11.1002 3C7.45057 3.00657 5.53942 3.09617 4.31806 4.31754C3 5.63559 3 7.75698 3 11.9997C3 16.2425 3 18.3639 4.31806 19.6819C5.63611 21 7.7575 21 12.0003 21C16.243 21 18.3644 21 19.6825 19.6819C20.9038 18.4606 20.9934 16.5494 21 12.8998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.9995 6.02505L20 6.02252C16.2634 6.01307 14.3951 6.00834 13.0817 6.95241C12.6452 7.26614 12.2622 7.6482 11.9474 8.08388C11 9.39491 11 11.2632 11 14.9998M20.9995 6.02505C21.0062 5.86242 20.9481 5.69881 20.8251 5.55309C20.0599 4.64662 18.0711 2.99976 18.0711 2.99976M20.9995 6.02505C20.9934 6.17087 20.9352 6.31591 20.8249 6.44657C20.0596 7.35286 18.0711 8.99976 18.0711 8.99976" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Share03Icon;
