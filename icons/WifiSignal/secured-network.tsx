import * as React from "react";
import type { SVGProps } from "react";

interface SecuredNetworkIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SecuredNetworkIcon = (props: SecuredNetworkIconProps) => {
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
        <path d="M6 13C6 9.68629 8.68629 7 12 7C15.3137 7 18 9.68629 18 13C18 16.3137 15.3137 19 12 19C8.68629 19 6 16.3137 6 13Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15.5 8V5.52063C15.5 3.57624 13.933 2 12 2C10.067 2 8.5 3.57624 8.5 5.52063V8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11.9998 13H12.0088" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 19V22M12 22H20M12 22H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SecuredNetworkIcon;
