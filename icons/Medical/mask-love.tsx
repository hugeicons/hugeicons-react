import * as React from "react";
import type { SVGProps } from "react";

interface MaskLoveIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MaskLoveIcon = (props: MaskLoveIconProps) => {
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
        <path d="M14.1418 13.4419C15.3486 12.7108 16.4018 13.0054 17.0345 13.4747C17.294 13.6671 17.4237 13.7633 17.5 13.7633C17.5763 13.7633 17.706 13.6671 17.9655 13.4747C18.5982 13.0054 19.6514 12.7108 20.8582 13.4419C22.4419 14.4013 22.8002 17.5666 19.1472 20.2371C18.4514 20.7457 18.1035 21 17.5 21C16.8965 21 16.5486 20.7457 15.8528 20.2371C12.1998 17.5666 12.5581 14.4013 14.1418 13.4419Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 8C7.46589 7.38677 9.61061 7 12 7C14.3894 7 16.5341 7.38677 18 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 9C6 12.2571 4.1688 13.9419 3.05731 13.9985C3.02153 14.0003 2.98891 13.9808 2.97139 13.9496C2.15656 12.4966 2 10.7879 2 9C2 5.68629 2.89543 3 4 3C5.10457 3 6 5.68629 6 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.06 10.02C18.0094 9.66713 18 9.40053 18 9C18 5.68629 18.8954 3 20 3C21.1046 3 22 5.68629 22 9C22 9.38088 22 10.14 21.948 10.52" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 19C8.04 18.78 4.74 17.04 3 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default MaskLoveIcon;
