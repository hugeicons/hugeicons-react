import * as React from "react";
import type { SVGProps } from "react";

interface TrulliIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TrulliIcon = (props: TrulliIconProps) => {
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
        <path d="M3.67201 10.5471L7.47975 5.84679C9.55727 3.28226 10.596 2 12.0001 2C13.4042 2 14.443 3.28226 16.5205 5.84679L20.3282 10.5471C20.8408 11.1798 21.097 11.4961 20.9664 11.7481C20.8357 12 20.4154 12 19.5748 12H4.4254C3.5848 12 3.1645 12 3.03386 11.7481C2.90322 11.4961 3.15949 11.1798 3.67201 10.5471Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.00012 8.50768C9.32819 9.40703 10.8212 5.2314 13.5795 7.91042C15.0001 9.29007 16.4165 9.205 18.0001 8.50769" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.0002 22V18C10.0002 16.8954 10.8957 16 12.0002 16C13.1048 16 14.0002 16.8954 14.0002 18V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.5002 12L19.5002 20C19.5002 20.9428 19.5002 21.4142 19.2074 21.7071C18.9145 22 18.4431 22 17.5002 22L6.50024 22C5.55743 22 5.08603 22 4.79314 21.7071C4.50024 21.4142 4.50024 20.9428 4.50024 20L4.50024 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default TrulliIcon;
