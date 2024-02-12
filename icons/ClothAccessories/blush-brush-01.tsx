import * as React from "react";
import type { SVGProps } from "react";

interface BlushBrush01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BlushBrush01Icon = (props: BlushBrush01IconProps) => {
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
        <path d="M8.06493 11.0322L2.88348 12.8234C0.435833 13.7381 3.7349 17.9574 4.82972 19.0466C5.92455 20.1359 10.3316 23.5832 11.251 21.1481L12.994 15.9361M3.23395 16.49L5.93563 15.1122M7.639 20.4976L8.8931 18.0545" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.6263 8.24924L13.6285 7.25217C14.0227 6.85992 14.7108 6.93348 15.105 7.32572L16.6692 8.8819C17.0635 9.27415 17.0635 9.9101 16.6692 10.3023L15.667 11.2994C15.3715 11.5934 15.175 11.9714 15.1045 12.3812L14.61 15.2579C14.4719 16.0612 13.4803 16.3751 12.901 15.7988L8.36296 11.0114C7.78369 10.4351 7.88879 9.51181 8.69627 9.37441L11.5877 8.88241C11.9996 8.81232 12.3308 8.54324 12.6263 8.24924Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.9444 9.00266L21.5269 4.26072C22.8839 2.91072 21.0185 1.16058 19.7191 2.45342L14.9253 6.99384" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BlushBrush01Icon;
