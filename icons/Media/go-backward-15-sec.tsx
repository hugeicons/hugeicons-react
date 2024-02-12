import * as React from "react";
import type { SVGProps } from "react";

interface GoBackward15SecIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const GoBackward15SecIcon = (props: GoBackward15SecIconProps) => {
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
        <path d="M12 5L10.8961 3.45459C10.4851 2.87911 10.2795 2.59137 10.4093 2.32411C10.5391 2.05684 10.8689 2.04153 11.5286 2.01092C11.6848 2.00367 11.842 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 8.72836 3.57111 5.82368 6 3.99927" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 10.9997C8.528 10.5797 9.008 9.8871 9.308 10.0157C9.608 10.1442 9.512 10.5677 9.512 11.2277C9.512 11.8877 9.512 14.6804 9.512 16.0037" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 10H13.3595C13.1212 10 12.916 10.1682 12.8692 10.4019L12.504 12.504C13.14 12.24 13.4607 12.1429 14.1766 12.1429C15.2126 12.1429 16.104 12.78 16.002 14.1C16.02 15.66 14.76 16.02 14.1766 16C13.5931 15.98 12.66 16.2 12.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default GoBackward15SecIcon;
