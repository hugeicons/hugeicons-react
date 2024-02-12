import * as React from "react";
import type { SVGProps } from "react";

interface WhatsappBusinessIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const WhatsappBusinessIcon = (props: WhatsappBusinessIconProps) => {
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
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.3789 2.27907 14.6926 2.78382 15.8877C3.06278 16.5481 3.20226 16.8784 3.21953 17.128C3.2368 17.3776 3.16334 17.6521 3.01642 18.2012L2 22L5.79877 20.9836C6.34788 20.8367 6.62244 20.7632 6.87202 20.7805C7.12161 20.7977 7.45185 20.9372 8.11235 21.2162C9.30745 21.7209 10.6211 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12.8824 12C14.0519 12 15 13.0074 15 14.25C15 15.4926 14.0519 16.5 12.8824 16.5H10.4118C9.74625 16.5 9.4135 16.5 9.20675 16.2972C9 16.0945 9 15.7681 9 15.1154V12M12.8824 12C14.0519 12 15 10.9926 15 9.75C15 8.50736 14.0519 7.5 12.8824 7.5H10.4118C9.74625 7.5 9.4135 7.5 9.20675 7.70277C9 7.90554 9 8.2319 9 8.88462V12M12.8824 12H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default WhatsappBusinessIcon;
