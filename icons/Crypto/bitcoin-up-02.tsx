import * as React from "react";
import type { SVGProps } from "react";

interface BitcoinUp02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BitcoinUp02Icon = (props: BitcoinUp02IconProps) => {
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
        <path d="M12 9C8.41015 9 5.5 11.9101 5.5 15.5C5.5 19.0898 8.41015 22 12 22C15.5898 22 18.5 19.0899 18.5 15.5C18.5 11.9101 15.5898 9 12 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 2L16.0237 5.6148C15.3073 6.26613 14.949 6.5918 14.527 6.56553C14.1051 6.53926 13.79 6.17167 13.1599 5.4365L12.6533 4.84557C12.1043 4.20505 11.8298 3.88479 11.4541 3.83296C11.0783 3.78112 10.7274 4.0151 10.0254 4.48305L4 8.5M20 2H16.5M20 2V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.4375 18.1667L10.4375 12.8333M12 12.8333V11.5M12 19.5V18.1667M10.4375 15.5H13.5625M13.5625 15.5C14.0803 15.5 14.5 15.9477 14.5 16.5V17.1667C14.5 17.719 14.0803 18.1667 13.5625 18.1667H9.5M13.5625 15.5C14.0803 15.5 14.5 15.0523 14.5 14.5V13.8333C14.5 13.281 14.0803 12.8333 13.5625 12.8333H9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BitcoinUp02Icon;
