import * as React from "react";
import type { SVGProps } from "react";

interface WashingtonMonumentIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const WashingtonMonumentIcon = (props: WashingtonMonumentIconProps) => {
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
        <path d="M7 19L8.76762 6.62668C8.88311 5.81824 8.94085 5.41402 9.10135 5.04395C9.26184 4.67389 9.51749 4.35549 10.0288 3.71871L10.5858 3.02497C11.2524 2.34166 11.5858 2 12 2C12.4142 2 12.7475 2.34166 13.4142 3.02497L13.9712 3.71871C14.4825 4.35549 14.7382 4.67389 14.8987 5.04395C15.0591 5.41402 15.1169 5.81825 15.2324 6.62668L17 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 22H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 22L19.7812 21.6718C18.9093 20.3639 18.4733 19.71 17.81 19.355C17.1467 19 16.3608 19 14.7889 19H9.2111C7.63921 19 6.85326 19 6.18998 19.355C5.5267 19.71 5.09073 20.3639 4.2188 21.6718L4 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 6H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 19L12 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default WashingtonMonumentIcon;
