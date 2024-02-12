import * as React from "react";
import type { SVGProps } from "react";

interface AiLaptopIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AiLaptopIcon = (props: AiLaptopIconProps) => {
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
        <path d="M3.99268 14.999V6.96505C3.99268 5.07142 3.99268 4.12461 4.57628 3.53633C4.90165 3.20835 5.33757 3.06323 5.9852 2.99902H10.9665" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.49202 16.0144L4.01198 14.999H19.8847L20.4331 16.0144C21.8706 18.676 22.2287 20.0067 21.6822 21.0029C21.1359 21.999 19.6872 21.999 16.7899 21.999H7.13535C4.23802 21.999 2.78935 21.999 2.24296 21.0029C1.69657 20.0067 2.05453 18.676 3.49202 16.0144Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.4364 2.00098V3.98M11.9624 5.50136H14.0067M19.9555 5.50136H21.9998M19.9555 8.47458H21.9998M11.9624 8.47458H14.0067M15.4364 10.0202V11.9992M18.4505 10.0202V11.9992M18.4398 2.00098V3.98M15.003 9.96854H18.9592C19.5094 9.96854 19.9555 9.52082 19.9555 8.96854V4.98C19.9555 4.42771 19.5094 3.98 18.9592 3.98H15.003C14.4528 3.98 14.0067 4.42771 14.0067 4.98V8.96854C14.0067 9.52082 14.4528 9.96854 15.003 9.96854Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default AiLaptopIcon;
