import * as React from "react";
import type { SVGProps } from "react";

interface FolderMusicIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FolderMusicIcon = (props: FolderMusicIconProps) => {
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
        <path d="M7 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C21.9579 8.52694 21.9965 9.25981 21.9997 11M12 6.5L11.3666 5.23313C10.8418 4.18358 10.3622 3.12712 9.19926 2.69101C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88032C3.05227 3.15142 2.65142 3.55227 2.38032 4.03806C2 4.71956 2 5.6278 2 7.44427V10.5C2 15.214 2 17.5711 3.46447 19.0355C4.8215 20.3926 6.94493 20.4921 11 20.4994" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18.375 19.25C18.375 20.4926 17.3956 21.5 16.1875 21.5C14.9794 21.5 14 20.4926 14 19.25C14 18.0074 14.9794 17 16.1875 17C17.3956 17 18.375 18.0074 18.375 19.25ZM18.375 19.25V12.5C18.6667 12.95 18.9 14.84 21 15.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FolderMusicIcon;
