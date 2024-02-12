import * as React from "react";
import type { SVGProps } from "react";

interface FolderViewIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FolderViewIcon = (props: FolderViewIconProps) => {
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
        <path d="M7 6.50447H16.75C18.8567 6.50447 19.91 6.50447 20.6667 7.01062C20.9943 7.22974 21.2755 7.51131 21.4944 7.83925C22 8.59676 22 9.65129 22 11.7603C22 12.2047 22.0017 12.1093 22 12.5M12 6.50447L11.3666 5.23618C10.8418 4.18546 10.3622 3.12782 9.19926 2.69122C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88074C3.05227 3.15215 2.65142 3.55344 2.38032 4.03978C2 4.72204 2 5.63129 2 7.4498V10.5089C2 15.2282 2 17.5879 3.46447 19.054C4.5784 20.1692 6.20875 20.4361 9 20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M21.4593 17.0153C21.8198 17.4308 22 17.6385 22 18C22 18.3615 21.8198 18.5692 21.4593 18.9847C20.5612 20.0199 18.9381 21.5 17 21.5C15.0619 21.5 13.4388 20.0199 12.5407 18.9847C12.1802 18.5692 12 18.3615 12 18C12 17.6385 12.1802 17.4308 12.5407 17.0153C13.4388 15.9801 15.0619 14.5 17 14.5C18.9381 14.5 20.5612 15.9801 21.4593 17.0153Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M17 18H17.009" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FolderViewIcon;
