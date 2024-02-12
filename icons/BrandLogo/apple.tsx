import * as React from "react";
import type { SVGProps } from "react";

interface AppleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AppleIcon = (props: AppleIconProps) => {
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
        <path d="M15.1773 5.17735C14.0936 6.26107 12.0378 5.96225 12.0378 5.96225C12.0378 5.96225 11.7389 3.90637 12.8227 2.82265C13.9064 1.73893 15.9622 2.03775 15.9622 2.03775C15.9622 2.03775 16.2611 4.09363 15.1773 5.17735Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M4 14.0593C4 17.341 6.19645 21.1103 8.41889 21.9069C9.1894 22.183 9.98578 21.8019 10.6479 21.3274C11.1502 20.9674 11.7584 20.6236 12.2497 20.6236C12.7409 20.6236 13.3491 20.9674 13.8514 21.3274C14.5135 21.8019 15.3099 22.183 16.0804 21.9069C17.6597 21.3409 19.2258 19.2738 20 16.9473C18.5008 16.5179 17.4057 15.1614 17.4057 13.5544C17.4057 12.0821 18.3248 10.8201 19.6318 10.2886C18.7897 8.79309 17.4136 8 15.8589 8C15.0546 8 14.3154 8.32422 13.7183 8.71286C12.7653 9.33314 11.7341 9.33315 10.781 8.71286C10.1839 8.32422 9.44473 8 8.64044 8C6.07759 8 4 10.1551 4 14.0593Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default AppleIcon;
