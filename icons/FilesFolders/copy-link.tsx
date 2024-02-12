import * as React from "react";
import type { SVGProps } from "react";

interface CopyLinkIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CopyLinkIcon = (props: CopyLinkIconProps) => {
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
        <path d="M14.5563 13.2183C13.514 14.2606 11.8241 14.2606 10.7817 13.2183C9.73942 12.1759 9.73942 10.486 10.7817 9.44364L13.1409 7.0845C14.1357 6.08961 15.7206 6.04433 16.7692 6.94866M16.4437 3.78175C17.486 2.73942 19.1759 2.73942 20.2183 3.78175C21.2606 4.82408 21.2606 6.51403 20.2183 7.55636L17.8591 9.9155C16.8643 10.9104 15.2794 10.9557 14.2308 10.0513" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M21 13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default CopyLinkIcon;
