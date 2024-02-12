import * as React from "react";
import type { SVGProps } from "react";

interface AdobePhotoshopIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AdobePhotoshopIcon = (props: AdobePhotoshopIconProps) => {
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
        <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M6.5 16V12M6.5 12V9.125C6.5 9.00892 6.5 8.95087 6.50482 8.90198C6.55158 8.42721 6.92721 8.05158 7.40198 8.00482C7.45087 8 7.50892 8 7.625 8H9C10.1046 8 11 8.89543 11 10C11 11.1046 10.1046 12 9 12H6.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.4658 11.2225C17.2923 10.5267 16.4782 10 15.5 10C14.3954 10 13.5 10.6716 13.5 11.5C13.5 12.3284 14.3954 13 15.5 13C16.6046 13 17.5 13.6716 17.5 14.5C17.5 15.3284 16.6046 16 15.5 16C14.5183 16 13.7019 15.4696 13.5323 14.77" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default AdobePhotoshopIcon;
