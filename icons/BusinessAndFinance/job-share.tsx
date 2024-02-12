import * as React from "react";
import type { SVGProps } from "react";

interface JobShareIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const JobShareIcon = (props: JobShareIconProps) => {
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
        <path d="M11.0065 21H9.60546C6.02021 21 4.22759 21 3.11379 19.865C2 18.7301 2 16.9034 2 13.25C2 9.59661 2 7.76992 3.11379 6.63496C4.22759 5.5 6.02021 5.5 9.60546 5.5H13.4082C16.9934 5.5 18.7861 5.5 19.8999 6.63496C20.4571 7.20279 20.7356 7.94376 20.8747 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19.1581 19.829C19.0569 20.0309 19 20.2588 19 20.5C19 21.3284 19.6716 22 20.5 22C21.3284 22 22 21.3284 22 20.5C22 19.6716 21.3284 19 20.5 19C19.9128 19 19.4043 19.3375 19.1581 19.829ZM19.1581 19.829L15.8419 18.171M19.1581 15.171C19.4043 15.6625 19.9128 16 20.5 16C21.3284 16 22 15.3284 22 14.5C22 13.6716 21.3284 13 20.5 13C19.6716 13 19 13.6716 19 14.5C19 14.7412 19.0569 14.9691 19.1581 15.171ZM19.1581 15.171L15.8419 16.829M15.8419 16.829C15.5957 16.3375 15.0872 16 14.5 16C13.6716 16 13 16.6716 13 17.5C13 18.3284 13.6716 19 14.5 19C15.0872 19 15.5957 18.6625 15.8419 18.171M15.8419 16.829C15.9431 17.0309 16 17.2588 16 17.5C16 17.7412 15.9431 17.9691 15.8419 18.171" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15.9998 5.5L15.9004 5.19094C15.4054 3.65089 15.1579 2.88087 14.5686 2.44043C13.9794 2 13.1967 2 11.6313 2H11.3682C9.8028 2 9.02011 2 8.43087 2.44043C7.84162 2.88087 7.59411 3.65089 7.0991 5.19094L6.99976 5.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default JobShareIcon;
