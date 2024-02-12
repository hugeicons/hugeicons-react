import * as React from "react";
import type { SVGProps } from "react";

interface SortingAZ01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SortingAZ01Icon = (props: SortingAZ01IconProps) => {
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
        <path d="M15.9367 2L16.417 2.45852C16.8461 2.8682 17.0606 3.07305 16.9851 3.2471C16.9096 3.42115 16.6062 3.42115 15.9993 3.42115H8.56617C5.49108 3.42115 2.88649 5.34451 2 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.02139 22L7.58291 21.5792C7.15391 21.1674 6.93942 20.9616 7.01491 20.7866C7.0904 20.6117 7.39375 20.6117 8.00043 20.6117H15.432C18.5102 20.6117 21.1169 18.6739 22 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 9.5H17.9474C18.5675 9.5 18.8775 9.5 18.9601 9.70009C19.0427 9.90019 18.8317 10.1402 18.4098 10.6203L15.9846 13.3797C15.5627 13.8598 15.3517 14.0998 15.4343 14.2999C15.5169 14.5 15.8269 14.5 16.447 14.5H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 14.5L4.75464 10.5877C5.07987 9.86258 5.24249 9.5 5.5 9.5C5.75751 9.5 5.92013 9.86258 6.24536 10.5877L8 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 12H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SortingAZ01Icon;
