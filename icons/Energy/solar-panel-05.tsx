import * as React from "react";
import type { SVGProps } from "react";

interface SolarPanel05IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SolarPanel05Icon = (props: SolarPanel05IconProps) => {
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
        <path d="M9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15.7933 11H8.20668C7.2338 11 6.74735 11 6.37446 11.2671C6.00157 11.5342 5.83077 12.005 5.48917 12.9466L4.76359 14.9466C4.09554 16.7881 3.76151 17.7088 4.19435 18.3544C4.62719 19 5.57849 19 7.48111 19H16.5189C18.4215 19 19.3728 19 19.8057 18.3544C20.2385 17.7088 19.9045 16.7881 19.2364 14.9466L18.5108 12.9466C18.1692 12.005 17.9984 11.5342 17.6255 11.2671C17.2526 11 16.7662 11 15.7933 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 11V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 15H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 19V22M12 22H14M12 22H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 2.5V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.5 8H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 8L6.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.8887 4.11088L16.2422 3.75732" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.75781 3.75781L8.11137 4.11137" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SolarPanel05Icon;
