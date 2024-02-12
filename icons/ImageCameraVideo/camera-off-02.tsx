import * as React from "react";
import type { SVGProps } from "react";

interface CameraOff02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CameraOff02Icon = (props: CameraOff02IconProps) => {
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
        <path d="M21 21.1212C20.1269 22 18.7217 22 15.9112 22H7.96193C5.15145 22 3.74621 22 2.8731 21.1212C2 20.2424 2 18.8279 2 15.9991V11.4984C2 9.15242 2 7.97945 2.61601 7.1714C2.7746 6.96337 2.95959 6.77716 3.16627 6.61754C3.84131 6.09617 4.42141 6.0132 5.97462 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M21.9934 17.5C21.9999 17.0495 21.9999 16.5516 21.9999 16V11.5C21.9999 9.15442 21.9999 7.98164 21.38 7.17372C21.2204 6.96572 21.0342 6.77954 20.8262 6.61994C20.0183 6 19.3455 6 16.9999 6H16.5999M16.9999 7L16.5999 6M8 4.5C8.35233 3.62326 8.6912 2.70121 9.58327 2.25955C10.1075 2 10.7383 2 11.9999 2C13.2615 2 13.8923 2 14.4166 2.25955C15.3993 2.7461 15.7319 3.82996 16.1141 4.78543L16.5999 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.0604 11C9.84821 11.5202 9 12.7176 9 14.1116C9 15.9829 10.5286 17.5 12.4143 17.5C13.7763 17.5 14.952 16.7085 15.5 15.5638" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11.9998 6H12.0088" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 2L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default CameraOff02Icon;
