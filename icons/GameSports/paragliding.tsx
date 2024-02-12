import * as React from "react";
import type { SVGProps } from "react";

interface ParaglidingIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ParaglidingIcon = (props: ParaglidingIconProps) => {
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
        <path d="M12.7586 11.213C12.2725 11.0137 11.7275 11.0137 11.2413 11.213L2.00402 15C2.00402 14.0305 1.92087 13.0354 2.51085 12.1986C4.55645 9.29747 8.40267 5.19677 11.0772 3.29756C11.636 2.90081 12.364 2.90081 12.9228 3.29756C15.5973 5.19677 19.4436 9.29747 21.4892 12.1986C22.0791 13.0354 21.996 14.0305 21.996 15L12.7586 11.213Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.028 12C9.60981 13.1195 7.27437 17.1832 8.22598 18.2889C8.94881 19.1288 14.8699 19.3394 15.774 18.2889C16.7256 17.1832 14.3902 13.1195 13.972 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 17L4.5 14M16 17L19.5 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ParaglidingIcon;
