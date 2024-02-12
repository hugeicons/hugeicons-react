import * as React from "react";
import type { SVGProps } from "react";

interface PointingLeft08IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PointingLeft08Icon = (props: PointingLeft08IconProps) => {
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
        <path d="M2 4.5H8M2 4.5C2 3.79977 3.9943 2.49153 4.5 2M2 4.5C2 5.20023 3.9943 6.50847 4.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.015 13.0054L8.01076 13.0054M8.01076 13.0054H4.50456C3.67361 13.0054 3 12.333 3 11.5036C3 10.6742 3.67361 10.0018 4.50456 10.0018L9.969 10.0018M8.01076 13.0054L8.03762 14.0598C8.05574 14.7708 8.44402 15.3874 9.0156 15.7277M9.969 10.0018L14.5319 10.0018M9.969 10.0018L12.7288 7.4084C14.5964 5.83594 15.9578 6.66226 16.7142 7.24251L19.1516 8.85739C21.2191 10.0822 22 11.4996 22 12.6918V17.5726C22 19.8386 19.6177 21.9517 17.4342 21.9517L12.2343 21.9997C11.2241 22.0091 10.365 21.2664 10.23 20.2671L10.0407 18.7267M11.0448 16.0089H10.0407C9.66648 16.0089 9.31576 15.9064 9.0156 15.7277M9.0156 15.7277L9.0703 17.0633C9.09792 18.1477 9.98658 19.0125 11.0734 19.0125H12.0774" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default PointingLeft08Icon;
