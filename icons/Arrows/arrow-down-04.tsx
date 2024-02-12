import * as React from "react";
import type { SVGProps } from "react";

interface ArrowDown04IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ArrowDown04Icon = (props: ArrowDown04IconProps) => {
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
        <path d="M10.3974 18.5859L9.63612 17.6194C8.40264 16.0536 7.7859 15.2707 8.06721 14.6354C8.34853 14 9.31191 14 11.2387 14H12.7613C14.6881 14 15.6515 14 15.9328 14.6354C16.2141 15.2707 15.5974 16.0536 14.3639 17.6194L13.6026 18.5858C12.8599 19.5286 12.4885 20 12 20C11.5115 20 11.1401 19.5286 10.3974 18.5859Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 14L12 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ArrowDown04Icon;
