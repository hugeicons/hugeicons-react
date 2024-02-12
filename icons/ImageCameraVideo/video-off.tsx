import * as React from "react";
import type { SVGProps } from "react";

interface VideoOffIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const VideoOffIcon = (props: VideoOffIconProps) => {
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
        <path d="M2.00195 2L21.9772 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16.8517 16.8678C16.7224 17.8062 16.4665 18.4669 15.9596 18.9745C14.9356 19.9997 13.2878 19.9997 9.99206 19.9997H8.99329C5.69755 19.9997 4.04967 19.9997 3.02582 18.9745C2.00195 17.9494 2.00195 16.2995 2.00195 12.9997V10.9997C2.00195 7.69983 2.00195 6.04991 3.02582 5.02478C3.36833 4.68184 3.78068 4.45363 4.30121 4.30176" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8.23633 4.00052C8.47821 4 8.73001 4 8.99223 4H9.99099C13.2868 4 14.9346 4 15.9585 5.02513C16.9823 6.05025 16.9823 7.70017 16.9823 11V12.7574M16.9823 9.23142L19.3019 7.52913C20.7729 6.54074 21.449 7.17197 21.6675 7.64847C22.1192 8.92813 21.9769 11.3936 21.9769 14.5417C21.8703 16.555 21.5953 16.7719 21.3138 16.9939L21.3108 16.9963" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default VideoOffIcon;
