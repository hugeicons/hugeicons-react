import * as React from "react";
import type { SVGProps } from "react";

interface Unlink03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Unlink03Icon = (props: Unlink03IconProps) => {
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
        <path d="M9.52344 14.4367L14.4365 9.52368" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M21.0152 16.0088H19.0115M16.0059 21.0192V19.015" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.98242 7.99208H4.98615M7.99175 2.98169V4.98584" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.1066 12.5687C16.2466 13.3084 17.4153 13.111 18.2696 12.2566L21.264 9.26159C22.2421 8.28325 22.2421 6.69705 21.264 5.71871L18.2787 2.73278C17.3005 1.75444 15.7147 1.75444 14.7365 2.73278L11.7422 5.72779C11.0404 6.42968 10.6352 7.76371 11.4651 8.91009" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.5685 15.1085C13.308 16.2488 13.1106 17.4178 12.2564 18.2722L9.262 21.2672C8.28387 22.2456 6.69801 22.2456 5.71987 21.2672L2.73458 18.2813C1.75644 17.303 1.75644 15.7168 2.73458 14.7384L5.72895 11.7434C6.4307 11.0415 7.76444 10.6362 8.91058 11.4663" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Unlink03Icon;
