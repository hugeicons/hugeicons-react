import * as React from "react";
import type { SVGProps } from "react";

interface NutIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const NutIcon = (props: NutIconProps) => {
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
        <path d="M8.8973 6.08447C6.64279 6.79007 3.96587 8.62563 2.86371 10.6417C2.23423 11.5877 1.48908 13.7759 2.48323 17.1683C2.66517 17.9527 3.02601 19.6528 2.80768 20.1861C3.3379 19.9665 5.02795 20.3295 5.80769 20.5125C9.18004 21.5126 11.3553 20.763 12.2957 20.1298C14.2998 19.0211 16.1245 16.3282 16.826 14.0603" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22.001 4.9138C21.3544 4.46677 19.5601 3.88107 17.6999 5.34811M15.8049 4.08833C13.1452 2.66147 11.0115 2.88588 9.84114 3.37039C9.6518 3.44876 9.47979 3.56963 9.35958 3.73631C8.43064 5.02438 9.61053 6.96873 11.8955 9.75478C12.2745 10.2169 12.6972 10.6437 13.156 11.0258C15.8603 13.2781 17.961 14.5919 19.2548 13.6261C19.3961 13.5206 19.5028 13.3753 19.5767 13.2147C20.2169 11.8242 20.0993 9.53088 18.7963 7.08777C18.1184 5.81673 17.0703 4.76719 15.8049 4.08833Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default NutIcon;
