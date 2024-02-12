import * as React from "react";
import type { SVGProps } from "react";

interface Touchpad02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Touchpad02Icon = (props: Touchpad02IconProps) => {
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
        <path d="M11.1957 14.144L13 15.7622V7.5C13 6.67157 13.6716 6 14.5 6C15.3284 6 16 6.67157 16 7.5V11.9821L17.7888 12.2969C19.2636 12.5405 20.001 12.6623 20.5205 13.005C21.3784 13.571 22 14.4211 22 15.662C22 16.5263 21.806 17.1062 21.3344 18.6642C21.0352 19.6528 20.8855 20.1471 20.6416 20.5384C20.2399 21.1826 19.6473 21.6529 18.9653 21.8689C18.551 22.0001 18.0779 22.0001 17.1316 22.0001H16.3295C15.0714 22.0001 14.4424 22.0001 13.8824 21.7459C13.7819 21.7003 13.6838 21.6488 13.5883 21.5917C13.056 21.2734 12.6594 20.7358 11.866 19.6606L9.29778 16.1797C8.90312 15.6448 8.90049 14.8792 9.29146 14.3411C9.76138 13.6942 10.6245 13.6049 11.1957 14.144Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 10C22 6.22876 22 4.34315 20.8284 3.17157C19.6569 2 17.7712 2 14 2H10C6.22876 2 4.34315 2 3.17157 3.17157C2 4.34315 2 6.22876 2 10V12C2 13.8638 2 14.7956 2.30448 15.5307C2.71046 16.5108 3.48915 17.2895 4.46927 17.6955C5.05932 17.9399 5.77617 17.9881 7 17.9977" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Touchpad02Icon;
