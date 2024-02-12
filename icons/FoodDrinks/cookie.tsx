import * as React from "react";
import type { SVGProps } from "react";

interface CookieIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CookieIcon = (props: CookieIconProps) => {
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
        <path d="M12.0579 22C16.9725 22 21.0638 18.4937 21.9416 13.8586C22.1996 12.4967 21.5931 12.5686 20.3101 12.3438C19.3996 12.1844 18.5498 11.5667 18.2333 10.588C18.0178 9.9216 17.9376 9.89475 17.2352 9.86554C15.7861 9.80529 14.625 8.2689 15.2032 7.02602C15.419 6.56236 15.412 6.50892 15.0078 6.19448C14.3005 5.6443 13.9706 4.6166 14.0978 3.62604C14.2347 2.5591 14.3147 2.1747 13.1854 2.05455C7.45657 1.44501 2 6.0196 2 11.9948C2 17.5205 6.50308 22 12.0579 22Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11.0078 12L10.9988 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.00781 10L5.99883 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.0078 18L11.9988 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 6L9 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 14L16 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 15L8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CookieIcon;
