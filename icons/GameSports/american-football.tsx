import * as React from "react";
import type { SVGProps } from "react";

interface AmericanFootballIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AmericanFootballIcon = (props: AmericanFootballIconProps) => {
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
        <path d="M21.3006 6.05187C21.1484 5.22701 20.7411 4.45623 20.1372 3.85008C19.5309 3.24641 18.7599 2.83927 17.9348 2.68704C13.7379 1.98816 9.32857 3.26088 6.29895 6.28553C3.27 9.30951 1.9905 13.7155 2.68454 17.9122C2.83679 18.7371 3.24405 19.5079 3.84791 20.114C4.45425 20.7177 5.22527 21.1248 6.0504 21.2771C10.2213 22.0738 14.6996 20.7027 17.6917 17.6794C20.7496 14.6729 22.0291 10.2497 21.3006 6.05187Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 20L20 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12L12 15M12 9L15 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default AmericanFootballIcon;
