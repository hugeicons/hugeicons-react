import * as React from "react";
import type { SVGProps } from "react";

interface MailboxIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MailboxIcon = (props: MailboxIconProps) => {
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
        <path d="M5.5 19V8.5C5.5 4.91015 8.41015 2 12 2C15.5899 2 18.5 4.91015 18.5 8.5V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.8688 22H5.13104C4.51972 22 4.21406 22 4.06951 21.7924C3.92497 21.5848 4.02157 21.2845 4.21477 20.684C4.561 19.6077 4.9089 19 6.14897 19H17.8508C19.0907 19 19.4386 19.6077 19.785 20.6838C19.9784 21.2844 20.0751 21.5847 19.9305 21.7924C19.786 22 19.4803 22 18.8688 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.5 11H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.5 8H19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default MailboxIcon;
