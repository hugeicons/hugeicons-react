import * as React from "react";
import type { SVGProps } from "react";

interface MoonLandingIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MoonLandingIcon = (props: MoonLandingIconProps) => {
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
        <path d="M12 12C7.46544 12 3.62948 14.9642 2.35747 19.044C1.99646 20.2019 1.81595 20.7809 2.26968 21.3904C2.7234 22 3.46112 22 4.93655 22H19.0634C20.5389 22 21.2766 22 21.7303 21.3904C22.184 20.7809 22.0035 20.2019 21.6425 19.044C20.3705 14.9642 16.5346 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.9998 17H15.0088" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 22C12 20.3431 10.6569 19 9 19C7.34315 19 6 20.3431 6 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 12V7.5M12 7.5V5C12 3.58579 12 2.87868 12.4393 2.43934C12.8787 2 13.5858 2 15 2H17.25C18.4228 2 19.0092 2 19.4131 2.30997C19.5171 2.38977 19.6102 2.48286 19.69 2.58686C20 2.99082 20 3.57721 20 4.75C20 5.92279 20 6.50918 19.69 6.91314C19.6102 7.01714 19.5171 7.11023 19.4131 7.19003C19.0092 7.5 18.4228 7.5 17.25 7.5H12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default MoonLandingIcon;
