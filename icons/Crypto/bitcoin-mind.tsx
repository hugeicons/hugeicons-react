import * as React from "react";
import type { SVGProps } from "react";

interface BitcoinMindIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BitcoinMindIcon = (props: BitcoinMindIconProps) => {
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
        <path d="M15.5 22V21.5C15.5 20.3954 16.4321 19.5005 17.4223 19.011C18.3846 18.5354 19.1943 17.7511 19.2965 16.8313L19.5 15L21.5 14L19 10.25C19 5.69365 15.3063 2 10.75 2C6.19365 2 2.5 5.69365 2.5 10.25C2.5 13.0379 3.88283 15.5028 6 16.9962M6 16.9962V22M6 16.9962C6.75065 17.5257 7.59362 17.9331 8.5 18.1895" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.9375 12.6667L8.9375 7.33333M10.5 7.33333V6M10.5 14V12.6667M8.9375 10H12.0625M12.0625 10C12.5803 10 13 10.4477 13 11V11.6667C13 12.219 12.5803 12.6667 12.0625 12.6667H8M12.0625 10C12.5803 10 13 9.55228 13 9V8.33333C13 7.78105 12.5803 7.33333 12.0625 7.33333H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BitcoinMindIcon;
