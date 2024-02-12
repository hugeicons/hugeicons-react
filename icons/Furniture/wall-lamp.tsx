import * as React from "react";
import type { SVGProps } from "react";

interface WallLampIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const WallLampIcon = (props: WallLampIconProps) => {
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
        <path d="M3.99854 14.0034V21.9998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.99854 18.3026L7.95845 19.8479C10.476 20.8303 11.7349 21.3216 12.6313 20.7699C13.5278 20.2182 13.5278 18.9524 13.5278 16.4205V8.0061" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.5513 2.99895V2.00024" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.07812 8.00617H20.0016M9.34857 6.2107C8.70068 6.81575 8.57269 6.91006 8.39523 7.07609C8.14088 7.31408 8.05386 7.67847 8.14242 8.01476L10.196 15.8127C10.3302 16.3219 10.751 16.7058 11.2719 16.7939C12.7668 17.0467 14.2917 17.0557 15.7861 16.7919C16.2798 16.7048 16.6789 16.3418 16.8109 15.8597L18.9668 7.9878C19.052 7.677 18.9918 7.33487 18.7675 7.10291C18.5847 6.91394 18.4566 6.84444 17.778 6.2107C17.0255 5.50799 16.3052 4.23984 16.001 3.85484C15.6968 3.46984 15.4628 3.28084 15.0768 3.19357C14.0804 2.96835 13.0461 2.96835 12.0498 3.19357C11.6638 3.28084 11.4647 3.42324 11.1256 3.85484C10.7864 4.28644 10.101 5.50799 9.34857 6.2107Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default WallLampIcon;
