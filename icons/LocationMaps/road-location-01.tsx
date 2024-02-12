import * as React from "react";
import type { SVGProps } from "react";

interface RoadLocation01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const RoadLocation01Icon = (props: RoadLocation01IconProps) => {
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
        <path d="M18.5 15L16.5 15M13 15L11 15M7.5 15L5.5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 2C9.79086 2 8 3.80892 8 6.04033C8 7.31626 8.5 8.30834 9.5 9.1945C10.2049 9.81911 11.0588 10.8566 11.5714 11.6975C11.8173 12.1008 12.165 12.1008 12.4286 11.6975C12.9672 10.8733 13.7951 9.81911 14.5 9.1945C15.5 8.30834 16 7.31626 16 6.04033C16 3.80892 14.2091 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 6H12.009" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 8C19.7745 8.14988 20.3588 8.40002 20.8284 8.81749C22 9.85903 22 11.5353 22 14.888C22 18.2406 22 19.9169 20.8284 20.9585C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.9585C2 19.9169 2 18.2406 2 14.888C2 11.5353 2 9.85902 3.17157 8.81749C3.64118 8.40002 4.2255 8.14988 5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default RoadLocation01Icon;
