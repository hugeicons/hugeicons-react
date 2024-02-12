import * as React from "react";
import type { SVGProps } from "react";

interface SoundcloudIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SoundcloudIcon = (props: SoundcloudIconProps) => {
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
        <path d="M8 6V19M5.00018 9.87917V18.9079M2 11.6296V17.1574" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.4776 10.6001C17.485 10.6 17.4925 10.6 17.5 10.6C19.9853 10.6 22 12.4804 22 14.8C22 17.1196 19.9853 19 17.5 19H14M17.4776 10.6001C17.4924 10.4463 17.5 10.2907 17.5 10.1333C17.5 7.29827 15.0376 5 12 5H11V19M17.4776 10.6001C17.3753 11.6589 16.9286 12.625 16.2428 13.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SoundcloudIcon;
