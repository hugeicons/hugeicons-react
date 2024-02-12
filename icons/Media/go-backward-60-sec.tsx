import * as React from "react";
import type { SVGProps } from "react";

interface GoBackward60SecIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const GoBackward60SecIcon = (props: GoBackward60SecIconProps) => {
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
        <path d="M16.5049 12.5939C16.5002 11.2197 16.568 10.845 16.3158 10.4018C16.0636 9.9586 15.4332 9.99693 14.8028 9.99693C14.1724 9.99693 13.7402 9.99693 13.446 10.306C13.1139 10.6988 13.2002 11.0997 13.1858 12.5819C13.2002 14.6397 13.0802 15.3597 13.4402 15.6597C13.8002 16.0797 14.2632 15.9838 14.9174 15.9957C15.5669 15.9875 15.9605 16.0197 16.2814 15.6364C16.6368 15.301 16.4648 13.9714 16.5049 12.5939Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M10.7644 10.9921C10.7404 10.2601 10.3475 9.99615 9.19366 9.99615C7.94696 9.9814 7.51235 10.0201 7.50035 11.4001C7.50035 12.6002 7.50035 12.9602 7.50035 14.7602C7.50036 16.2602 8.64036 15.9662 9.24036 16.0022C9.72036 15.9662 10.7481 16.2376 10.8184 14.7002C10.7404 13.2602 10.2004 13.2602 9.24036 13.2602C7.92036 13.2602 7.86036 13.2602 7.50035 14.0691" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default GoBackward60SecIcon;
