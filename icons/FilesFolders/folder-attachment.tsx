import * as React from "react";
import type { SVGProps } from "react";

interface FolderAttachmentIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FolderAttachmentIcon = (props: FolderAttachmentIconProps) => {
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
        <path d="M12.5 20.5H12C7.28595 20.5 4.92893 20.5 3.46447 19.0355C2 17.5711 2 15.214 2 10.5V7.44427C2 5.6278 2 4.71956 2.38032 4.03806C2.65142 3.55227 3.05227 3.15142 3.53806 2.88032C4.21956 2.5 5.1278 2.5 6.94427 2.5C8.10802 2.5 8.6899 2.5 9.19926 2.69101C10.3622 3.12712 10.8418 4.18358 11.3666 5.23313L12 6.5M7 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C22 8.58996 22 9.39331 22 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M21 15.9615L21 18.4231C21 20.1224 19.6569 21.5 18 21.5C16.3431 21.5 15 20.1224 15 18.4231L15 15.0385C15 14.1888 15.6716 13.5 16.5 13.5C17.3284 13.5 18 14.1888 18 15.0385L18 18.4231" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default FolderAttachmentIcon;
