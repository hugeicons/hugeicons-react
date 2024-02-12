import * as React from "react";
import type { SVGProps } from "react";

interface EidMubarakIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const EidMubarakIcon = (props: EidMubarakIconProps) => {
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
        <path d="M2.5 11.8049C2.5 17.1594 6.84065 21.5 12.1951 21.5C16.601 21.5 20.3204 18.5611 21.5 14.5367C20.0791 15.5691 18.3306 16.1779 16.44 16.1779C11.6804 16.1779 7.82208 12.3196 7.82208 7.56005C7.82208 5.66937 8.43094 3.9209 9.46326 2.5C5.4389 3.67959 2.5 7.39904 2.5 11.8049Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M13.2503 8.5C10.8263 5.5 14.9612 4 15.9999 2.5C17.0388 4 21.1737 5.5 18.7497 8.5M13.2503 8.5H18.7497M13.2503 8.5V15.5M18.7497 8.5V15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default EidMubarakIcon;
