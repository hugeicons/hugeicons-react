import * as React from "react";
import type { SVGProps } from "react";

interface ArrowLeft05IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ArrowLeft05Icon = (props: ArrowLeft05IconProps) => {
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
        <path d="M4 5.99951L4.00003 18.0002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.4968 12.0109V12.3814C12.5373 15.3525 12.4024 16.3847 11.1518 15.9055L10.8438 15.7236L10.5952 15.5508L10.06 15.1378L9.05958 14.2685L8.03669 13.4047L7.53669 12.9516L7.31404 12.7251L7.05187 12.346L6.99805 12.0097L7.05187 11.6757L7.31404 11.2967L7.53669 11.0701L8.03669 10.617L9.05958 9.75323L10.06 8.8839L10.5952 8.47091L10.8438 8.29813L11.1518 8.11621C12.4024 7.63699 12.5373 8.66922 12.4968 11.6403V12.0109ZM12.4968 12.0109H19.9997" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ArrowLeft05Icon;
