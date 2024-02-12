import * as React from "react";
import type { SVGProps } from "react";

interface Sorting91IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Sorting91Icon = (props: Sorting91IconProps) => {
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
        <path d="M7 20.9994V14.9481C7 14.3736 7 14.0863 6.76959 14.0149C6.26306 13.8577 5.5 14.999 5.5 14.999M7 20.9994H5.5M7 20.9994H8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 6.5V4.75C9 3.92504 9 3.51256 8.70711 3.25628C8.41421 3 7.94281 3 7 3C6.05719 3 5.58579 3 5.29289 3.25628C5 3.51256 5 3.92504 5 4.75C5 5.57496 5 5.98744 5.29289 6.24372C5.58579 6.5 6.05719 6.5 7 6.5H9ZM9 6.5V7.375C9 8.61244 9 9.23116 8.56066 9.61558C8.12132 10 7.41421 10 6 10H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.5 19.999V3.99902M16.5 19.999C15.7998 19.999 14.4915 18.0047 14 17.499M16.5 19.999C17.2002 19.999 18.5085 18.0047 19 17.499" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Sorting91Icon;
