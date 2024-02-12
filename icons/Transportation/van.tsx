import * as React from "react";
import type { SVGProps } from "react";

interface VanIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const VanIcon = (props: VanIconProps) => {
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
        <path d="M12 6L12.9536 9.85977C13.119 10.5295 13.72 11 14.4098 11H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 6H13.0689C14.6176 6 15.3919 6 16.0484 6.34597C16.705 6.69194 17.1427 7.33069 18.0182 8.60818C18.6321 9.50396 19.2765 10.1542 20.1826 10.7326C21.0949 11.315 21.5287 11.5996 21.7694 12.0566C22 12.4942 22 13.0125 22 14.049C22 15.4156 22 16.0989 21.5875 16.5331C21.5699 16.5517 21.5517 16.5699 21.5331 16.5875C21.0989 17 20.4156 17 19.049 17M5 17C4.67926 17 4.38501 17 4.22939 16.9666C4.07377 16.9332 3.92752 16.8674 3.63503 16.7358L2 16C2 12.8056 2.47904 10.9623 3.10557 9.44992C3.5164 8.45825 3.72182 7.96241 3.63686 7.52064C3.5519 7.07887 2.5 6 2.5 6M9 17H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="17" cy="17" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="7" cy="17" r="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default VanIcon;
