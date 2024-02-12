import * as React from "react";
import type { SVGProps } from "react";

interface CompassIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CompassIcon = (props: CompassIconProps) => {
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
        <circle cx="12" cy="13" r="9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 3.5V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 2H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.7728 10.2571C15.5061 10.9837 14.3328 16.8933 13.1289 16.9974C12.1189 17.0848 11.8041 15.0928 11.5914 14.4614C11.3815 13.8383 11.1478 13.6139 10.5298 13.4095C8.95989 12.8901 8.17492 12.6304 8.0195 12.2192C7.60796 11.1304 13.8362 9.32902 14.7728 10.2571Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default CompassIcon;
