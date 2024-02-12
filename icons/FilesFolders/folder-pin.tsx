import * as React from "react";
import type { SVGProps } from "react";

interface FolderPinIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FolderPinIcon = (props: FolderPinIconProps) => {
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
        <path d="M7.02477 6.5H16.8231C18.9402 6.5 19.9988 6.5 20.7592 7.00559C21.0884 7.22447 21.371 7.50572 21.591 7.83329C21.8044 8.15114 21.9282 8.52135 22 9M12.0495 6.5L11.413 5.23313C10.8856 4.18358 10.4037 3.12712 9.23493 2.69101C8.72304 2.5 8.13829 2.5 6.96877 2.5C5.1433 2.5 4.23056 2.5 3.54568 2.88032C3.05748 3.15142 2.65465 3.55227 2.3822 4.03806C2 4.71956 2 5.6278 2 7.44427V10.5C2 15.214 2 17.5711 3.47172 19.0355C4.94344 20.5 7.31215 20.5 12.0495 20.5C12.552 20.5 13.0545 20.5001 13.557 20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19.0039 18.5V21.5M16.0092 17C16.1517 17.8145 17.1884 18.1556 18.4051 18.3923C18.5161 18.4138 19.4345 18.367 19.5459 18.3477C20.4331 18.1937 22.0576 17.8917 21.9987 17C21.9293 15.9501 21.1515 15.5966 20.4437 14.9615C20.1537 14.7013 20.1137 14.2766 20.2878 13.9277L20.6904 13.1211C20.8768 12.7477 20.8224 12.285 20.5026 12.0173C20.0309 11.6224 19.6286 11.4995 19.0039 11.5C18.292 11.5691 17.8763 11.7142 17.4879 12.0268C17.1702 12.2825 17.1268 12.7392 17.309 13.1043L17.6952 13.878C17.8818 14.2519 17.818 14.7051 17.505 14.9816C16.6934 15.6985 15.8724 16.2183 16.0092 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FolderPinIcon;
