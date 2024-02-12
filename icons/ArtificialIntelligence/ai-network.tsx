import * as React from "react";
import type { SVGProps } from "react";

interface AiNetworkIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AiNetworkIcon = (props: AiNetworkIconProps) => {
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
        <path d="M21.25 5.5C20.8358 5.5 20.5 5.16421 20.5 4.75C20.5 4.33579 20.8358 4 21.25 4C21.6642 4 22 4.33579 22 4.75C22 5.16421 21.6642 5.5 21.25 5.5ZM21.25 5.5V9.25C21.25 9.94778 21.25 10.2967 21.1639 10.5806C20.97 11.2198 20.4698 11.72 19.8306 11.9139C19.5467 12 19.1978 12 18.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M2.75 18.5C3.16421 18.5 3.5 18.8358 3.5 19.25C3.5 19.6642 3.16421 20 2.75 20C2.33579 20 2 19.6642 2 19.25C2 18.8358 2.33579 18.5 2.75 18.5ZM2.75 18.5L2.75 14.75C2.75 14.0522 2.75 13.7033 2.83612 13.4194C3.03002 12.7802 3.53023 12.28 4.16943 12.0861C4.45333 12 4.80222 12 5.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M5.5 2.75C5.5 3.16421 5.16421 3.5 4.75 3.5C4.33579 3.5 4 3.16421 4 2.75C4 2.33579 4.33579 2 4.75 2C5.16421 2 5.5 2.33579 5.5 2.75ZM5.5 2.75L9.25 2.75C9.94778 2.75 10.2967 2.75 10.5806 2.83612C11.2198 3.03002 11.72 3.53023 11.9139 4.16943C12 4.45333 12 4.80222 12 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M18.5 21.25C18.5 20.8358 18.8358 20.5 19.25 20.5C19.6642 20.5 20 20.8358 20 21.25C20 21.6642 19.6642 22 19.25 22C18.8358 22 18.5 21.6642 18.5 21.25ZM18.5 21.25L14.75 21.25C14.0522 21.25 13.7033 21.25 13.4194 21.1639C12.7802 20.97 12.28 20.4698 12.0861 19.8306C12 19.5467 12 19.1978 12 18.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M5.54883 11.9512C5.54883 8.88704 5.54883 7.35498 6.50073 6.40307C7.45263 5.45117 8.9847 5.45117 12.0488 5.45117C15.113 5.45117 16.645 5.45117 17.5969 6.40307C18.5488 7.35498 18.5488 8.88704 18.5488 11.9512C18.5488 15.0153 18.5488 16.5474 17.5969 17.4993C16.645 18.4512 15.113 18.4512 12.0488 18.4512C8.9847 18.4512 7.45263 18.4512 6.50073 17.4993C5.54883 16.5474 5.54883 15.0153 5.54883 11.9512Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12.499 14.5L11.0384 9.97891C10.9465 9.69466 10.6648 9.5 10.3452 9.5C10.0256 9.5 9.74382 9.69466 9.65199 9.97891L8.19133 14.5M14.9989 9.5V14.5M8.72979 13H11.9606" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default AiNetworkIcon;
