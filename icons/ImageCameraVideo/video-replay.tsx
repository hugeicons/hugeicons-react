import * as React from "react";
import type { SVGProps } from "react";

interface VideoReplayIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const VideoReplayIcon = (props: VideoReplayIconProps) => {
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
        <path d="M17.7 21.3351C16.528 21.4998 14.9996 21.4998 12.95 21.4998H11.05C7.01949 21.4998 5.00424 21.4998 3.75212 20.2476C2.5 18.9955 2.5 16.9803 2.5 12.9498V11.0498C2.5 7.01925 2.5 5.00399 3.75212 3.75187C5.00424 2.49976 7.01949 2.49976 11.05 2.49976H12.95C16.9805 2.49976 18.9958 2.49976 20.2479 3.75187C21.5 5.00399 21.5 7.01925 21.5 11.0498V12.9498C21.5 14.158 21.5 15.1851 21.4663 16.0648C21.4392 16.7699 21.4257 17.1224 21.1587 17.2541C20.8917 17.3859 20.5931 17.1746 19.9958 16.752L18.65 15.7998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.9453 12.3948C14.7686 13.0215 13.9333 13.4644 12.2629 14.3502C10.648 15.2064 9.8406 15.6346 9.18992 15.4625C8.9209 15.3913 8.6758 15.2562 8.47812 15.07C8 14.6198 8 13.7465 8 12C8 10.2535 8 9.38018 8.47812 8.92995C8.6758 8.74381 8.9209 8.60868 9.18992 8.53753C9.8406 8.36544 10.648 8.79357 12.2629 9.64983C13.9333 10.5356 14.7686 10.9785 14.9453 11.6052C15.0182 11.8639 15.0182 12.1361 14.9453 12.3948Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default VideoReplayIcon;
