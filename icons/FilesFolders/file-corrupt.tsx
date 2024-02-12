import * as React from "react";
import type { SVGProps } from "react";

interface FileCorruptIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FileCorruptIcon = (props: FileCorruptIconProps) => {
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
        <path d="M10 21.9999C9.13078 22.0014 8.45772 21.9898 7.90733 21.9484C6.59818 21.85 5.16301 21.4938 4.38288 20.4389C4.28115 20.3013 4.18594 20.1487 4.09474 19.9786C3.59621 19.0489 3.5 17.966 3.5 16.9113V10.3879C3.5 8.80902 3.54361 7.17073 4.32263 5.79698C5.0304 4.54888 6.11215 3.50538 7.52571 2.87295C8.15522 2.59131 8.80685 2.33485 9.48531 2.21066C10.6451 1.99836 12.5823 1.97321 16 2.01975C18.2152 2.21825 19.3251 2.83421 20.0642 4.37732C20.4135 5.10659 20.4994 5.92797 20.4983 6.73643C20.4928 10.7594 20.489 13.7252 20.5 18.0039C20.088 21.0935 18.4113 21.8228 15.5008 21.9788C15.1863 21.9956 14.8842 21.8552 14.6874 21.6095L13.255 19.8208C13.0948 19.6208 13.0336 19.3516 13.1567 19.1268C13.417 18.6511 13.9233 18.1157 14.6468 17.3691C14.8408 17.1689 14.8331 16.8488 14.6311 16.6565C13.8461 15.9092 13.3677 15.3969 13.0951 14.76C13.0288 14.6051 13.0635 14.428 13.1688 14.2965L15.1648 12.0158" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.5 12.0198C3.5 10.1789 4.99238 8.68645 6.83333 8.68645C7.49912 8.68645 8.28404 8.80311 8.93137 8.62966C9.50652 8.47554 9.95576 8.0263 10.1099 7.45114C10.2833 6.80382 10.1667 6.0189 10.1667 5.35311C10.1667 3.51216 11.6591 2.01978 13.5 2.01978" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FileCorruptIcon;
