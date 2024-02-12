import * as React from "react";
import type { SVGProps } from "react";

interface MirroringScreenIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MirroringScreenIcon = (props: MirroringScreenIconProps) => {
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
        <path d="M4 21C4 19.8954 3.10457 19 2 19M8 21C8 17.6863 5.31371 15 2 15M12 21C12 15.4772 7.52285 11 2 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 8.00027C3.0779 6.12787 3.32904 4.97985 4.1387 4.17164C5.31244 3 7.20153 3 10.9797 3H13.9853C17.7634 3 19.6525 3 20.8263 4.17164C22 5.34327 22 7.229 22 11.0004V12.0005C22 15.7719 22 17.6577 20.8263 18.8293C19.7612 19.8924 18.1071 19.9909 14.9871 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default MirroringScreenIcon;
