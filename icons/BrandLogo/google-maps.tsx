import * as React from "react";
import type { SVGProps } from "react";

interface GoogleMapsIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const GoogleMapsIcon = (props: GoogleMapsIconProps) => {
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
        <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 17L18 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 12L14 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 5L10 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.0097 22C11.656 22 11.4911 21.8487 11.3085 21.341C10.8283 19.6517 9.93051 18.1911 8.84193 16.8195C7.85602 15.5031 6.40188 14.0036 5.64625 12.2964C3.54607 7.65487 6.8014 1.99238 11.9927 2.00003C17.3276 1.98532 20.5359 7.85105 18.2565 12.5446C17.5862 13.7271 16.8028 14.8433 15.917 15.878C14.5359 17.5095 13.2946 19.2753 12.7057 21.3436C12.5703 21.7426 12.3955 22 12.0097 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default GoogleMapsIcon;
