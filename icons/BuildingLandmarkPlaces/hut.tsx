import * as React from "react";
import type { SVGProps } from "react";

interface HutIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const HutIcon = (props: HutIconProps) => {
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
        <path d="M6 12H18L20 22H4L6 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 22L9.67845 18.7008C9.83237 17.9522 9.90934 17.578 10.1858 17.3575C10.7623 16.8979 13.1953 16.8641 13.8142 17.3575C14.0907 17.578 14.1676 17.9522 14.3216 18.7008L15 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 3.2L5.54446 8.43826C3.71745 9.92076 2.80395 10.662 3.03531 11.331C3.26667 12 4.43653 12 6.77624 12H17.2238C19.5635 12 20.7333 12 20.9647 11.331C21.1961 10.662 20.2826 9.92076 18.4555 8.43826L12 3.2ZM12 3.2L13.4789 2M12 3.2L10.5211 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 12L12 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 12L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 12L16 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 22H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default HutIcon;
