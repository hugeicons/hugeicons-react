import * as React from "react";
import type { SVGProps } from "react";

interface MobileSecurityIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MobileSecurityIcon = (props: MobileSecurityIconProps) => {
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
        <path d="M10.9994 2C7.69953 2 6.04961 2 5.02449 3.02513C3.99936 4.05025 3.99936 5.70017 3.99936 9V15C3.99936 18.2998 3.99936 19.9497 5.02449 20.9749C6.04961 22 7.69953 22 10.9994 22C14.2992 22 15.9491 22 16.9743 20.9749C17.9994 19.9497 17.9994 18.2998 17.9994 15V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9.99936 19H11.9994" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.8365 5.37988C13.7565 5.37988 13.2165 6.15988 13.0965 6.63988C12.9765 7.11988 12.9765 8.85988 13.0485 9.57988C13.2885 10.4799 13.8885 10.8519 14.4765 10.9719C15.0165 11.0199 17.2965 11.0019 17.9565 11.0019C18.9165 11.0199 19.6365 10.6599 19.9365 9.57988C19.9965 9.21988 20.0565 7.23988 19.9065 6.63988C19.5885 5.67988 18.7965 5.37988 18.1965 5.37988H14.8365Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.7494 4.95854C14.7494 4.89854 14.7576 4.55312 14.759 4.11854C14.7602 3.72145 14.7254 3.33854 14.915 2.98814C15.6254 1.57454 17.6654 1.71854 18.1694 3.15854C18.2567 3.39562 18.2619 3.77146 18.2594 4.11854C18.2561 4.56203 18.2654 4.95854 18.2654 4.95854" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default MobileSecurityIcon;
