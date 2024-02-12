import * as React from "react";
import type { SVGProps } from "react";

interface HorizontalResizeIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const HorizontalResizeIcon = (props: HorizontalResizeIconProps) => {
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
        <path d="M10 20L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 20L14 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 12L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.00017 12.0504C1.9696 11.0147 6.00844 8.57937 6.38885 9.06275C6.82022 9.61089 5.78886 11.2397 5.55656 11.7584C5.41686 12.0703 5.42069 12.2056 5.57954 12.5172C6.29675 13.9241 6.65535 14.6275 6.43595 14.9325L6.43397 14.9352C6.08047 15.4197 2.03001 13.0611 2.00017 12.0504Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M21.9998 11.9496C22.0304 12.9853 17.9916 15.4206 17.6112 14.9373C17.1798 14.3891 18.2111 12.7602 18.4434 12.2416C18.5831 11.9297 18.5793 11.7944 18.4205 11.4828C17.7033 10.0759 17.3446 9.37251 17.564 9.06751L17.566 9.06478C17.9195 8.58035 21.97 10.9389 21.9998 11.9496Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M18 12L14 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default HorizontalResizeIcon;
