import * as React from "react";
import type { SVGProps } from "react";

interface FolderRemoveIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FolderRemoveIcon = (props: FolderRemoveIconProps) => {
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
        <path d="M13 20.5H12C7.28595 20.5 4.92893 20.5 3.46447 19.0355C2 17.5711 2 15.214 2 10.5V7.44427C2 5.6278 2 4.71956 2.38032 4.03806C2.65142 3.55227 3.05227 3.15142 3.53806 2.88032C4.21956 2.5 5.1278 2.5 6.94427 2.5C8.10802 2.5 8.6899 2.5 9.19926 2.69101C10.3622 3.12712 10.8418 4.18358 11.3666 5.23313L12 6.5M7 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C22 8.58996 22 9.64331 22 11.75C22 12.0094 22.0003 12.2592 22 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 15.5L16 21.5M22 21.5L16 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default FolderRemoveIcon;
