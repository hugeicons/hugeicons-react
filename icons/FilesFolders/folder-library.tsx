import * as React from "react";
import type { SVGProps } from "react";

interface FolderLibraryIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FolderLibraryIcon = (props: FolderLibraryIconProps) => {
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
        <path d="M7.50304 4C7.48421 3.62851 7.55185 3.34156 7.73579 3.1C8.19267 2.5 9.12335 2.5 10.9847 2.5H13.0153C14.8766 2.5 15.8073 2.5 16.2642 3.1C16.4481 3.34156 16.5158 3.62851 16.497 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 8C5.03784 7.74037 5.12478 7.51593 5.26968 7.31431C5.85493 6.5 7.0681 6.5 9.49444 6.5H14.5056C16.9319 6.5 18.1451 6.5 18.7303 7.31431C18.8752 7.51593 18.9622 7.74037 19 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.81753 15.7128L4.53641 18.016C5.43193 20.8852 6.19729 21.5 9.21027 21.5H14.7897C17.8027 21.5 18.5681 20.8852 19.4636 18.016L20.1825 15.7128C20.9261 13.3303 21.2979 12.139 20.7101 11.3195C20.1223 10.5 18.896 10.5 16.4434 10.5H7.55662C5.104 10.5 3.8777 10.5 3.28988 11.3195C2.70207 12.139 3.07389 13.3303 3.81753 15.7128Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FolderLibraryIcon;
