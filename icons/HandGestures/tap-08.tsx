import * as React from "react";
import type { SVGProps } from "react";

interface Tap08IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Tap08Icon = (props: Tap08IconProps) => {
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
        <path d="M7.78063 13.9568V9.49317M7.78063 9.49317V3.97805C7.78063 3.15846 8.46371 2.49792 9.2834 2.49792C10.1031 2.49792 10.749 3.15846 10.749 3.97805V7.974M7.78063 9.49317C6.46635 10.684 5.05205 12.1884 4.86159 12.5737C3.97541 13.9225 4.0683 14.5755 5.05588 16.2259C5.89469 17.6277 7.02277 19.1833 7.08862 19.2579C7.75886 20.0174 7.6256 20.0175 8.59705 20.7307C9.46453 21.3327 11.2639 21.7522 15.4822 21.3327C18.9187 20.8019 19.742 17.8026 19.7241 16.3692V12.8295C19.9382 9.88749 18.7083 9.75469 16.4752 9.46512M10.749 7.974V10.4976M10.749 7.974C11.3063 7.06532 13.3303 7.43254 13.7247 9.14847M13.7604 10.4936V9.49317C13.7604 9.4143 13.7565 9.33519 13.7453 9.25717M13.7247 9.14847C13.7264 9.15569 13.728 9.16293 13.7296 9.1702C13.736 9.19899 13.7412 9.228 13.7453 9.25717M13.7247 9.14847C13.7288 9.18343 13.7357 9.21967 13.7453 9.25717M13.7247 9.14847C13.5846 7.95246 16.6156 8.24402 16.739 10.3474V11.4905" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Tap08Icon;
