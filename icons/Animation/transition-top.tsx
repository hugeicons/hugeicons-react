import * as React from "react";
import type { SVGProps } from "react";

interface TransitionTopIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TransitionTopIcon = (props: TransitionTopIconProps) => {
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
        <path d="M18 22C19.4001 22 20.1002 22 20.635 21.7275C21.1054 21.4878 21.4878 21.1054 21.7275 20.635C22 20.1002 22 19.4001 22 18C22 16.5999 22 15.8998 21.7275 15.365C21.4878 14.8946 21.1054 14.5122 20.635 14.2725C20.1002 14 19.4001 14 18 14L6 14C4.59987 14 3.8998 14 3.36502 14.2725C2.89462 14.5122 2.51217 14.8946 2.27248 15.365C2 15.8998 2 16.5999 2 18C2 19.4001 2 20.1002 2.27248 20.635C2.51217 21.1054 2.89462 21.4878 3.36502 21.7275C3.8998 22 4.59987 22 6 22L18 22Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 6L12 14M12 6C11.2998 6 9.99153 7.9943 9.5 8.5M12 6C12.7002 6 14.0085 7.9943 14.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 8C2 5.66111 2 4.49167 2.53646 3.63789C2.81621 3.19267 3.19267 2.81621 3.63789 2.53646C4.49167 2 5.66111 2 8 2L16 2C18.3389 2 19.5083 2 20.3621 2.53647C20.8073 2.81621 21.1838 3.19267 21.4635 3.63789C22 4.49167 22 5.66111 22 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default TransitionTopIcon;
