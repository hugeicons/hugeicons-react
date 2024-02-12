import * as React from "react";
import type { SVGProps } from "react";

interface Kaaba01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Kaaba01Icon = (props: Kaaba01IconProps) => {
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
        <path d="M3 22V5.9907C3 5.25783 3 4.8914 3.20387 4.62261C3.40774 4.35383 3.76006 4.25575 4.46471 4.0596L11.4647 2.11106C11.7307 2.03702 11.8637 2 12 2C12.1363 2 12.2693 2.03702 12.5353 2.11106L19.5353 4.0596C20.2399 4.25575 20.5923 4.35383 20.7961 4.62261C21 4.8914 21 5.25783 21 5.9907V22" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 22H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 9L11.5661 7.04882C11.8519 6.98373 12.1481 6.98373 12.4339 7.04882L21 9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M19.65 12.7L21 13M15.6 11.8L16.5 12M12.9 11.2L12 11L11.1 11.2M4.35 12.7L3 13M8.4 11.8L7.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 7V22" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default Kaaba01Icon;
