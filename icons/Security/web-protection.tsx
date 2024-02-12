import * as React from "react";
import type { SVGProps } from "react";

interface WebProtectionIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const WebProtectionIcon = (props: WebProtectionIconProps) => {
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
        <path d="M18 20.5C18.8888 20.3004 19.5638 19.9722 20.1088 19.4327C21.5 18.0554 21.5 15.8386 21.5 11.405C21.5 6.97145 21.5 4.75466 20.1088 3.37733C18.7175 2 16.4783 2 12 2C7.52166 2 5.28249 2 3.89124 3.37733C2.5 4.75466 2.5 6.97145 2.5 11.405C2.5 15.8386 2.5 18.0554 3.89124 19.4327C4.43619 19.9722 5.11124 20.3004 6 20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2.5 8.5H21.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M6.99981 5.5H7.00879" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.9998 5.5H11.0088" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.9991 13C10.5744 13 9.65061 13.9085 8.55807 14.2397C8.11384 14.3744 7.89172 14.4417 7.80183 14.5366C7.71194 14.6315 7.68562 14.7702 7.63297 15.0476C7.06963 18.0157 8.30095 20.7598 11.2375 21.8279C11.553 21.9426 11.7108 22 12.0007 22C12.2906 22 12.4484 21.9426 12.7639 21.8279C15.7002 20.7598 16.9304 18.0157 16.3669 15.0476C16.3142 14.7701 16.2879 14.6314 16.198 14.5365C16.1081 14.4416 15.886 14.3743 15.4418 14.2397C14.3488 13.9086 13.4239 13 11.9991 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default WebProtectionIcon;
