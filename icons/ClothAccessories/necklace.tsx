import * as React from "react";
import type { SVGProps } from "react";

interface NecklaceIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const NecklaceIcon = (props: NecklaceIconProps) => {
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
        <path d="M10.542 12L10.9325 8.87597C11.0235 8.14798 11.3545 8 12.042 8C12.7295 8 13.0605 8.14798 13.1515 8.87597L13.542 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8.2844 12.611C9.6196 11.7996 10.785 12.1266 11.485 12.6474C11.7721 12.861 11.9156 12.9678 12 12.9678C12.0845 12.9678 12.228 12.861 12.5151 12.6474C13.2151 12.1266 14.3805 11.7996 15.7157 12.611C17.468 13.6759 17.8645 17.189 13.8226 20.153C13.0527 20.7175 12.6678 20.9998 12 20.9998C11.3323 20.9998 10.9474 20.7175 10.1775 20.153C6.13558 17.189 6.53208 13.6759 8.2844 12.611Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2.0059 3C1.90863 4.57768 2.97686 8.04306 8.05347 9.66181M21.9941 3C22.0914 4.57768 21.0231 8.04306 15.9465 9.66181" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default NecklaceIcon;
