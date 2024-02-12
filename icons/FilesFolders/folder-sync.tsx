import * as React from "react";
import type { SVGProps } from "react";

interface FolderSyncIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FolderSyncIcon = (props: FolderSyncIconProps) => {
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
        <path d="M7 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C22 8.58996 21.9997 9.39331 21.9997 11.5M12 6.5L11.3666 5.23313C10.8418 4.18358 10.3622 3.12712 9.19926 2.69101C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88032C3.05227 3.15142 2.65142 3.55227 2.38032 4.03806C2 4.71956 2 5.6278 2 7.44427V10.5C2 15.214 2 17.5711 3.46447 19.0355C4.86181 20.4329 7.07178 20.4969 11.3666 20.4999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19.9932 17.4924L20.7481 17.8924C21.2777 18.1729 21.5425 18.3132 21.7884 18.1516C22.0343 17.99 22.0154 17.7366 21.9775 17.2296C21.7598 14.3175 18.1536 12.3206 15.6597 14.2859M16.0052 17.4924L15.2502 17.0925C14.721 16.8122 14.4565 16.672 14.2102 16.8347C13.964 16.9973 13.9842 17.25 14.0244 17.7553C14.2545 20.643 17.8402 22.6674 20.2724 20.7457" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FolderSyncIcon;
