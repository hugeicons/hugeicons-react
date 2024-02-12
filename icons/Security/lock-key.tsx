import * as React from "react";
import type { SVGProps } from "react";

interface LockKeyIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LockKeyIcon = (props: LockKeyIconProps) => {
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
        <path d="M18 10.997C17.6078 10.1968 16.5481 9.02147 14.3703 9.07148C14.3703 9.07148 12.6431 8.99646 10.6906 8.99646C8.73815 8.99646 7.82408 9.04218 6.25999 9.07148C5.25872 9.04647 3.35629 9.27153 2.48018 11.3471C1.90445 13.0976 1.87941 16.7736 2.22986 18.6241C2.30496 19.5743 2.80559 20.8997 4.35757 21.5999C5.30878 22.1 6.83573 21.9 7.9872 22M5.98465 8.19624C5.93458 5.82059 5.83445 3.94508 8.58796 2.39466C9.51414 2.01956 10.8909 1.69447 12.5931 2.49469C14.3703 3.56998 14.5917 4.70796 14.7458 4.99537C15.1713 6.12068 14.9461 7.72111 14.9961 8.37129" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15.5 19.7349C15.5 20.9789 14.4911 21.9653 13.2552 21.9653C12.0194 21.9653 11 20.9789 11 19.7349C11 18.4909 12.0194 17.4912 13.2552 17.4912C14.4911 17.4912 15.5 18.4909 15.5 19.7349Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15.225 17.7904L17.2156 15.8477M22 15.8477L20.373 14.3084C19.6 13.5687 18.95 14.2143 18.6264 14.4901L17.2156 15.8477M17.2156 15.8477L18.825 17.393" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default LockKeyIcon;
