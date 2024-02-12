import * as React from "react";
import type { SVGProps } from "react";

interface Drag01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Drag01Icon = (props: Drag01IconProps) => {
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
        <path d="M20.9638 4H16.9717M20.9638 4C20.9638 4.56018 19.4725 5.60678 18.9678 6M20.9638 4C20.9638 3.43982 19.4725 2.39322 18.9678 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.99902 4H6.99118M2.99902 4C2.99902 3.43982 4.49039 2.39322 4.9951 2M2.99902 4C2.99902 4.56018 4.49039 5.60678 4.9951 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.81487 22.0006V21.0595C9.81487 20.4116 9.60508 19.781 9.21688 19.2622L5.39417 14.1534C5.07649 13.7288 4.8396 13.2141 4.98547 12.7043C5.34567 11.4454 6.76774 10.3261 8.35883 12.2974L9.95899 14.0049V3.59381C10.0571 1.76459 13.1323 1.18685 13.4502 3.59381V9.52698C14.9328 9.33608 21.916 10.378 20.9001 14.7917C20.8515 15.0026 20.803 15.2167 20.7555 15.4279C20.5491 16.346 19.9405 17.98 19.2694 18.9355C18.5703 19.9309 18.8968 21.5353 18.817 22.0019" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Drag01Icon;
