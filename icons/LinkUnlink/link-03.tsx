import * as React from "react";
import type { SVGProps } from "react";

interface Link03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Link03Icon = (props: Link03IconProps) => {
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
        <path d="M9.52051 14.4359L14.4335 9.52283" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12.5685 15.1086C13.3082 16.249 13.1108 17.418 12.2563 18.2725L9.26109 21.2678C8.28269 22.2462 6.69638 22.2462 5.71798 21.2678L2.73185 18.2816C1.75345 17.3032 1.75345 15.7169 2.73185 14.7385L5.72706 11.7433C6.429 11.0413 7.76312 10.636 8.90958 11.4662M15.1083 12.5688C16.2487 13.3085 17.4177 13.1111 18.2722 12.2566L21.2674 9.26138C22.2458 8.28297 22.2458 6.69666 21.2674 5.71825L18.2813 2.7321C17.3029 1.75369 15.7166 1.75369 14.7382 2.7321L11.743 5.72733C11.041 6.42927 10.6357 7.7634 11.4659 8.90986" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Link03Icon;
