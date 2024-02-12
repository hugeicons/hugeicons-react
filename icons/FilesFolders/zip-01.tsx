import * as React from "react";
import type { SVGProps } from "react";

interface Zip01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Zip01Icon = (props: Zip01IconProps) => {
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
        <path d="M3.5 13V12.1963C3.5 9.22889 3.5 7.7452 3.96894 6.56021C4.72281 4.65518 6.31714 3.15252 8.33836 2.44198C9.59563 2 11.1698 2 14.3182 2C16.1173 2 17.0168 2 17.7352 2.25256C18.8902 2.65858 19.8012 3.51725 20.232 4.60584C20.5 5.28297 20.5 6.13079 20.5 7.82643V12.0142V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.5 12C3.5 10.1591 4.99238 8.66667 6.83333 8.66667C7.49912 8.66667 8.28404 8.78333 8.93137 8.60988C9.50652 8.45576 9.95576 8.00652 10.1099 7.43136C10.2833 6.78404 10.1667 5.99912 10.1667 5.33333C10.1667 3.49238 11.6591 2 13.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.5 16H6.9C7.14721 16 7.28833 16.2822 7.14 16.48L3.72 21.04C3.42334 21.4355 3.70557 22 4.2 22H7.5M10.5 16H12.25M12.25 16H14M12.25 16V21.6787M10.5 22H14M17 22V16H18.8618C19.5675 16 20.2977 16.3516 20.4492 17.0408C20.5128 17.33 20.5109 17.6038 20.4488 17.8923C20.2936 18.6138 19.5392 19 18.8012 19H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Zip01Icon;
