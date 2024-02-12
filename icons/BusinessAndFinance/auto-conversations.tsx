import * as React from "react";
import type { SVGProps } from "react";

interface AutoConversationsIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AutoConversationsIcon = (props: AutoConversationsIconProps) => {
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
        <path d="M4.94436 8.04069L10.8282 8.04069M2 18L7.49762 12.5862C7.70914 12.3779 8.03957 12.3544 8.27806 12.5308L12.5239 15.6712C12.774 15.8563 13.1229 15.8204 13.3306 15.5883L21.2849 6.70262M18.1084 6H20.9306C21.4785 6 21.9259 6.44077 21.9371 6.99179L22 10.0649" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default AutoConversationsIcon;
