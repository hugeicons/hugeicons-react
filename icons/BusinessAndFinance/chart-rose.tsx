import * as React from "react";
import type { SVGProps } from "react";

interface ChartRoseIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ChartRoseIcon = (props: ChartRoseIconProps) => {
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
        <path d="M9.71288 7.97461C6.6048 7.97461 4.08521 10.2303 4.08521 13.0129H9.71288V7.97461Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2.53453 15.926C3.77319 18.368 6.52105 20.0662 9.71196 20.0662L9.71196 13.0127H4.87217C3.40834 13.0127 2.67643 13.0127 2.23141 13.7319C1.78639 14.4511 2.03577 14.9427 2.53453 15.926Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12.7146 21.6766C16.8432 20.5311 19.842 17.0854 19.842 13.0127H9.71216V19.0586C9.71216 20.5322 9.71216 21.269 10.3128 21.7226C10.9134 22.1763 11.5138 22.0097 12.7146 21.6766Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M21.6409 10.0343C20.4535 6.21439 17.0382 3.22528 12.7272 2.25958C11.4777 1.97968 10.8529 1.83973 10.2825 2.29354C9.71216 2.74735 9.71216 3.48208 9.71216 4.95155V13.0127H19.0541C20.534 13.0127 21.2739 13.0127 21.7294 12.3984C22.1849 11.784 22.0036 11.2008 21.6409 10.0343Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default ChartRoseIcon;
