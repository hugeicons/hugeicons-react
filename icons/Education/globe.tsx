import * as React from "react";
import type { SVGProps } from "react";

interface GlobeIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const GlobeIcon = (props: GlobeIconProps) => {
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
        <path d="M12.5 19L12.5 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.5 22H14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="7" cy="7" r="7" transform="matrix(-1 0 0 1 20.5 2)" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8.5 4C9.15431 4.0385 9.49236 4.35899 10.0735 4.97301C11.1231 6.08206 12.1727 6.1746 12.8724 5.80492C13.922 5.2504 13.04 4.35221 14.2719 3.86409C15.0748 3.54595 15.1868 2.68026 14.7399 2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M20 10C18.5 10 18.2338 11.2468 17 11C14.5 10.5 13.7916 11.0589 13.7916 12.2511C13.7916 13.4432 13.7916 13.4432 13.2717 14.3373C12.9335 14.9189 12.8153 15.5004 13.4894 16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M6.5 2C4.64864 3.79995 3.5 6.3082 3.5 9.08251C3.5 14.5598 7.97715 19 13.5 19C16.2255 19 18.6962 17.9187 20.5 16.165" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default GlobeIcon;
