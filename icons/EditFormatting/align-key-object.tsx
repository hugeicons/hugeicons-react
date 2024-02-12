import * as React from "react";
import type { SVGProps } from "react";

interface AlignKeyObjectIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AlignKeyObjectIcon = (props: AlignKeyObjectIconProps) => {
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
        <path d="M20 5.98946V11.9769M18 3.99365H6M10 19.9601H6M4 17.9643V5.98946" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 3.99386C22 5.09611 21.1046 5.98967 20 5.98967C18.8954 5.98967 18 5.09611 18 3.99386C18 2.8916 18.8954 1.99805 20 1.99805C21.1046 1.99805 22 2.8916 22 3.99386Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 3.99386C6 5.09611 5.10457 5.98967 4 5.98967C2.89543 5.98967 2 5.09611 2 3.99386C2 2.8916 2.89543 1.99805 4 1.99805C5.10457 1.99805 6 2.8916 6 3.99386Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 19.9602C6 21.0625 5.10457 21.956 4 21.956C2.89543 21.956 2 21.0625 2 19.9602C2 18.8579 2.89543 17.9644 4 17.9644C5.10457 17.9644 6 18.8579 6 19.9602Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15.5368 19.4119L17.9989 16.7963M17.9989 16.7963L19.4847 15.2075C19.667 15.0626 20.0608 14.8178 20.5925 15.3049C21.0731 15.7452 21.7038 16.4303 21.9873 16.7504M17.9989 16.7963L19.503 18.4327M15.9971 20.4863C15.9971 21.3231 15.3234 22.0014 14.4922 22.0014C13.6611 22.0014 12.9873 21.3231 12.9873 20.4863C12.9873 19.6495 13.6611 18.9712 14.4922 18.9712C15.3234 18.9712 15.9971 19.6495 15.9971 20.4863Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default AlignKeyObjectIcon;
