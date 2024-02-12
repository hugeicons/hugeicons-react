import * as React from "react";
import type { SVGProps } from "react";

interface NiqabIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const NiqabIcon = (props: NiqabIconProps) => {
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
        <path d="M12 5C10.3431 5 9 6.33121 9 7.97334V14.9111C9 16.0413 9.00455 17.2286 10.2346 17.7336C11.1 18.0888 12.9 18.0888 13.7654 17.7336C14.9954 17.2286 15 16.0413 15 14.9111V7.97334C15 6.33121 13.6569 5 12 5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M17.8022 7.51864C17.8022 4.47078 15.2045 2 12 2C8.79554 2 6.19782 4.47078 6.19782 7.51864C6.19782 9.61659 5.45992 13.4691 3.05841 16.4349C2.31105 17.3578 1.93737 17.8193 2.00859 18.244C2.0798 18.6687 2.48003 18.9288 3.28049 19.4489C8.51571 22.8504 15.4843 22.8504 20.7195 19.4489C21.52 18.9288 21.9202 18.6687 21.9914 18.244C22.0626 17.8193 21.689 17.3578 20.9416 16.4349C18.5401 13.4691 17.8022 9.61659 17.8022 7.51864Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 8H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 11H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default NiqabIcon;
