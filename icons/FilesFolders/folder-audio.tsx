import * as React from "react";
import type { SVGProps } from "react";

interface FolderAudioIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FolderAudioIcon = (props: FolderAudioIconProps) => {
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
        <path d="M12.0088 20.5C7.29058 20.5 4.9315 20.5 3.46575 19.0355C2 17.5711 2 15.214 2 10.5V7.44427C2 5.6278 2 4.71956 2.38065 4.03806C2.65199 3.55227 3.05319 3.15142 3.53941 2.88032C4.22151 2.5 5.13054 2.5 6.9486 2.5C8.11337 2.5 8.69575 2.5 9.20556 2.69101C10.3695 3.12712 10.8495 4.18358 11.3748 5.23313L12.0088 6.5M7.00438 6.5H16.7629C18.8714 6.5 19.9257 6.5 20.683 7.00559C21.0109 7.22447 21.2924 7.50572 21.5115 7.83329C21.8526 8.34341 21.9638 8.98836 22 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M21.0002 18.5826V15.4174C21.0002 13.6482 21.0002 12.7636 20.4601 12.5435C19.9199 12.3233 19.2842 12.9488 18.0128 14.1998C17.3509 14.851 16.9662 14.9911 16.0419 14.9911C15.2226 14.9911 14.813 14.9911 14.5187 15.1846C13.9152 15.5814 14.0002 16.3627 14.0002 17C14.0002 17.6373 13.9152 18.4186 14.5187 18.8154C14.813 19.0089 15.2226 19.0089 16.0419 19.0089C16.9662 19.0089 17.3509 19.149 18.0128 19.8002C19.2842 21.0512 19.9199 21.6767 20.4601 21.4565C21.0002 21.2364 21.0002 20.3518 21.0002 18.5826Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FolderAudioIcon;
