import * as React from "react";
import type { SVGProps } from "react";

interface LaptopIssueIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LaptopIssueIcon = (props: LaptopIssueIconProps) => {
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
        <path d="M20 14.5V6.5C20 4.61438 20 3.67157 19.4142 3.08579C18.8284 2.5 17.8856 2.5 16 2.5H8C6.11438 2.5 5.17157 2.5 4.58579 3.08579C4 3.67157 4 4.61438 4 6.5V14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.49762 15.5154L4.01953 14.5H19.9518L20.5023 15.5154C21.9452 18.177 22.3046 19.5077 21.7561 20.5039C21.2077 21.5 19.7536 21.5 16.8454 21.5L7.15462 21.5C4.24642 21.5 2.79231 21.5 2.24387 20.5039C1.69543 19.5077 2.05474 18.177 3.49762 15.5154Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 11H12.009" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 8.5L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default LaptopIssueIcon;
