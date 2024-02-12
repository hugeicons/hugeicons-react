import * as React from "react";
import type { SVGProps } from "react";

interface BitcoinCpuIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BitcoinCpuIcon = (props: BitcoinCpuIconProps) => {
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
        <path d="M4 12C4 8.22876 4 6.34315 5.17157 5.17157C6.34315 4 8.22876 4 12 4C15.7712 4 17.6569 4 18.8284 5.17157C20 6.34315 20 8.22876 20 12C20 15.7712 20 17.6569 18.8284 18.8284C17.6569 20 15.7712 20 12 20C8.22876 20 6.34315 20 5.17157 18.8284C4 17.6569 4 15.7712 4 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10.125 15L10.125 9M12 9V7.5M12 16.5V15M10.125 12H13.875M13.875 12C14.4963 12 15 12.5037 15 13.125V13.875C15 14.4963 14.4963 15 13.875 15H9M13.875 12C14.4963 12 15 11.4963 15 10.875V10.125C15 9.50368 14.4963 9 13.875 9H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 2V4M16 2V4M12 2V4M8 20V22M12 20V22M16 20V22M22 16H20M4 8H2M4 16H2M4 12H2M22 8H20M22 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BitcoinCpuIcon;
