import * as React from "react";
import type { SVGProps } from "react";

interface ApricotIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ApricotIcon = (props: ApricotIconProps) => {
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
        <path d="M10.201 20C11.3469 21.2447 12.852 22 14.5005 22C18.0903 22 21.0005 18.4183 21.0005 14C21.0005 9.58172 18.0903 6 14.5005 6C11.1858 6 8.39983 9.05369 8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 21.3869C11.2304 21.7819 10.3859 22 9.5 22C5.91015 22 3 18.4183 3 14C3 9.58172 5.91015 6 9.5 6C10.3859 6 11.2304 6.21813 12 6.61312" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 6C12 4.66667 12.6 2 15 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ApricotIcon;
