import * as React from "react";
import type { SVGProps } from "react";

interface FirewallIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FirewallIcon = (props: FirewallIconProps) => {
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
        <path d="M19 14H5C3.58579 14 2.87868 14 2.43934 14.4393C2 14.8787 2 15.5858 2 17V19C2 20.4142 2 21.1213 2.43934 21.5607C2.87868 22 3.58579 22 5 22H19C20.4142 22 21.1213 22 21.5607 21.5607C22 21.1213 22 20.4142 22 19V17C22 15.5858 22 14.8787 21.5607 14.4393C21.1213 14 20.4142 14 19 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 18H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 18L12 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 22L7 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 22L17 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.8412 11C18.5539 9.80598 17.8362 8.63931 16.3747 7.6C12.4372 4.8 11.9997 2 11.9997 2C11.9997 2 7.93797 5.6 10.2497 10C8.14967 10.32 7.17231 8 6.94613 6.8C5.97628 8.08998 5.20609 9.53564 5.03516 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FirewallIcon;
