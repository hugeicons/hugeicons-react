import * as React from "react";
import type { SVGProps } from "react";

interface PizzaCutterIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PizzaCutterIcon = (props: PizzaCutterIconProps) => {
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
        <path d="M18.0079 7.00648L18.0016 7.00013" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.8284 9.82843C19.2663 11.3905 16.7337 11.3905 15.1716 9.82843C13.6095 8.26633 13.6095 5.73367 15.1716 4.17157C16.7337 2.60948 19.2663 2.60948 20.8284 4.17157C22.3905 5.73367 22.3905 8.26633 20.8284 9.82843Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2.83987 20.2031C3.9597 21.2656 5.77529 21.2656 6.89512 20.2031C7.48089 19.6473 7.76025 18.9108 7.7332 18.1827C7.72646 18.0014 7.78437 17.8202 7.91493 17.6963L10.661 15.0907C10.8334 14.9272 11.0887 14.8998 11.3071 14.9902C12.3445 15.4194 13.6057 15.3298 14.6155 15.105C15.1172 14.9933 15.1194 14.3649 14.672 14.1221C14.066 13.7932 13.4955 13.3832 12.978 12.8922C12.3251 12.2727 11.8081 11.5731 11.4271 10.8266C11.023 10.0349 9.85237 9.70148 9.19682 10.3235L2.83987 16.3553C1.72004 17.4178 1.72004 19.1405 2.83987 20.2031Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M14 8.5L11.5 10.5M16 11L13.5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default PizzaCutterIcon;
