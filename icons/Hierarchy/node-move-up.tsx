import * as React from "react";
import type { SVGProps } from "react";

interface NodeMoveUpIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const NodeMoveUpIcon = (props: NodeMoveUpIconProps) => {
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
        <path d="M5.49512 8V12.5M5.49512 12.5V14C5.49512 16.8284 5.49512 18.2426 6.37314 19.1213C7.19781 19.9466 8.49459 19.9968 10.991 19.9998M5.49512 12.5H10.991" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.9907 12.5C10.9907 11.5572 10.9907 11.0858 11.2834 10.7929C11.5761 10.5 12.0471 10.5 12.9892 10.5C13.9313 10.5 14.4024 10.5 14.695 10.7929C14.9877 11.0858 14.9877 11.5572 14.9877 12.5C14.9877 13.4428 14.9877 13.9142 14.695 14.2071C14.4024 14.5 13.9313 14.5 12.9892 14.5C12.0471 14.5 11.5761 14.5 11.2834 14.2071C10.9907 13.9142 10.9907 13.4428 10.9907 12.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10.9907 20C10.9907 19.0572 10.9907 18.5858 11.2834 18.2929C11.5761 18 12.0471 18 12.9892 18C13.9313 18 14.4024 18 14.695 18.2929C14.9877 18.5858 14.9877 19.0572 14.9877 20C14.9877 20.9428 14.9877 21.4142 14.695 21.7071C14.4024 22 13.9313 22 12.9892 22C12.0471 22 11.5761 22 11.2834 21.7071C10.9907 21.4142 10.9907 20.9428 10.9907 20Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3.99605 2H6.99379C8.80763 2 8.99229 3.10993 8.99229 5C8.99229 6.89007 8.80763 8 6.99379 8H3.99605C2.18222 8 1.99756 6.89007 1.99756 5C1.99756 3.10993 2.18222 2 3.99605 2Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M17.9923 11.0888L19.4465 9.31614C19.6852 9.04977 19.8549 8.99924 20.003 9.00381M20.003 9.00381C20.1493 9.00832 20.2878 9.06683 20.4968 9.31614L22.0022 11.1001M20.003 9.00381L19.9803 17.2621C20.0513 18.1365 19.931 19.8282 17.9834 20.0082" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default NodeMoveUpIcon;
