import * as React from "react";
import type { SVGProps } from "react";

interface GrinningIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const GrinningIcon = (props: GrinningIconProps) => {
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
        <path d="M21.8 10C21.9311 10.6462 22 11.3151 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C13.2313 2 14.4107 2.22255 15.5 2.62961" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.5176 2L17.7168 3.78512C16.7498 4.76031 16.7665 6.33054 17.7335 7.28921C18.7173 8.24788 20.3012 8.23135 21.2683 7.27268C22.252 6.29749 22.2353 4.72724 21.2683 3.76857L19.5176 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8 9C8.42317 9.31737 9.19208 9.70974 9.28942 10.3412C9.29507 10.3778 9.2989 10.4148 9.30089 10.4519C9.32383 10.8805 9.01424 11.2537 8.39506 12M16 9C15.5768 9.31738 14.8079 9.70974 14.7106 10.3412C14.7049 10.3778 14.7011 10.4148 14.6991 10.4519C14.6762 10.8805 14.9858 11.2537 15.6049 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default GrinningIcon;
