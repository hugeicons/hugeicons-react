import * as React from "react";
import type { SVGProps } from "react";

interface AlphabetJapaneseIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AlphabetJapaneseIcon = (props: AlphabetJapaneseIconProps) => {
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
        <path d="M11.0078 3C9.5913 7 7.06961 14 11.5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 5.31913C6.70588 6.19855 15.1765 6.63826 21 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16.0034 10C16.4981 13 12.5403 19.5 7.15287 19.9565C0.934783 20.4834 4.62421 11 12.0451 11.5C18.2926 11.921 22.0322 16.8261 15.7923 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default AlphabetJapaneseIcon;
