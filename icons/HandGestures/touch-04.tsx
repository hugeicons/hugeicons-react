import * as React from "react";
import type { SVGProps } from "react";

interface Touch04IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Touch04Icon = (props: Touch04IconProps) => {
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
        <path d="M7.41601 14V10.5M7.41601 10.5V4.25C7.41601 3.2835 8.19951 2.5 9.16601 2.5C10.1325 2.5 10.916 3.2835 10.916 4.25V9.5L13.993 9.97757C15.9216 10.2669 16.886 10.4115 17.5652 10.8184C18.6872 11.4906 19.5 12.5 19.5 13.9736C19.5 15 19.2463 15.6886 18.6296 17.5387C18.2383 18.7127 18.0426 19.2996 17.7236 19.7643C17.1983 20.5293 16.4233 21.0878 15.5315 21.3442C14.9898 21.5 14.3711 21.5 13.1336 21.5H11.7287C9.94422 21.5 9.05198 21.5 8.28584 21.1651C7.9397 21.0137 7.61674 20.8141 7.32659 20.5722C6.68438 20.0367 6.28536 19.2387 5.48731 17.6426C4.84015 16.3483 4.51657 15.7011 4.50083 15.0302C4.49373 14.7276 4.53246 14.4256 4.61571 14.1346C4.80031 13.4894 5.27678 12.9448 6.2297 11.8558L7.41601 10.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Touch04Icon;
