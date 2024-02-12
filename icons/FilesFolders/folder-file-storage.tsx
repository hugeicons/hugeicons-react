import * as React from "react";
import type { SVGProps } from "react";

interface FolderFileStorageIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FolderFileStorageIcon = (props: FolderFileStorageIconProps) => {
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
        <path d="M7 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C21.9579 8.52694 21.9965 9.25981 21.9997 11M12 6.5L11.3666 5.23313C10.8418 4.18358 10.3622 3.12712 9.19926 2.69101C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88032C3.05227 3.15142 2.65142 3.55227 2.38032 4.03806C2 4.71956 2 5.6278 2 7.44427V10.5C2 15.214 2 17.5711 3.46447 19.0355C4.7646 20.3357 6.7682 20.4816 10.5 20.4979H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17.5556 21.5H18.4444C20.1205 21.5 20.9586 21.5 21.4793 20.9728C22 20.4456 22 19.5971 22 17.9V17.5912C22 16.8554 22 16.4875 21.8647 16.1568C21.7293 15.826 21.4724 15.5658 20.9586 15.0456L19.6488 13.7194C19.2323 13.2977 19.0241 13.0869 18.7847 12.9306C18.5152 12.7547 18.2165 12.6295 17.9031 12.5609C17.6247 12.5 17.3302 12.5 16.7412 12.5C15.8428 12.5 15.3936 12.5 15.0437 12.6606C14.6511 12.8408 14.3366 13.1593 14.1586 13.5568C14 13.911 14 14.3659 14 15.2755V17.9C14 19.5971 14 20.4456 14.5207 20.9728C15.0414 21.5 15.8795 21.5 17.5556 21.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FolderFileStorageIcon;
