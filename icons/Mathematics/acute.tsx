import * as React from "react";
import type { SVGProps } from "react";

interface AcuteIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AcuteIcon = (props: AcuteIconProps) => {
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
        <path d="M10.5958 2.52275C11.3962 2.29775 13.2718 1.82275 13.7721 2.07275M13.7721 2.07275C14.2973 2.39775 14.3973 4.14775 14.5475 4.87275M13.7721 2.07275L3.81773 18.1728C3.81773 18.1728 3.29249 19.0228 3.59264 19.4978C3.81774 20.0228 5.11831 19.9978 5.11831 19.9978H20.5M20.5 19.9978C20.5 19.3977 18.6992 18.1978 18.5241 17.9978M20.5 19.9978C20.5 20.5978 19.0494 21.4478 18.5241 21.9978" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" />
        <path d="M7.49414 12.498C9.36996 12.823 10.8049 13.723 11.6553 15.048C12.6057 16.398 12.7214 18.273 12.1462 19.798" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default AcuteIcon;
