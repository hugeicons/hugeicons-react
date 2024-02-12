import * as React from "react";
import type { SVGProps } from "react";

interface WifiError02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const WifiError02Icon = (props: WifiError02IconProps) => {
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
        <path d="M8.25 17C8.67265 16.5774 9.16229 16.244 9.6906 16M15.75 17C15.3274 16.5774 14.8377 16.244 14.3094 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.5 14C17.4308 13.0692 16.2435 12.4025 15 12M5.5 14C6.59299 13.1038 7.778 12.4524 9 12.046" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 10.9999C3.92227 9.37665 5.94206 8.13515 8 7.5M22 10.9998C20.0778 9.3766 18.0579 8.13513 16 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 20H12.0118" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.5864 4.32708C12.6577 3.89098 11.3422 3.89096 10.4136 4.32708C10.0852 4.48128 9.95517 4.84472 10.0135 5.19151L12 17L13.9865 5.19153C14.0448 4.84473 13.9148 4.48128 13.5864 4.32708Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default WifiError02Icon;
