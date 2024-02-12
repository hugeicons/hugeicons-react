import * as React from "react";
import type { SVGProps } from "react";

interface DuaIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DuaIcon = (props: DuaIconProps) => {
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
        <path d="M19 13L18.3417 12.3417C17.5896 11.5896 16.3803 11.5578 15.5896 12.2694L12.9931 14.6062C12.361 15.1751 12 15.9856 12 16.8361V21H14.6865C15.5238 21 16.323 20.6501 16.8909 20.0348L21.2044 15.3619C21.7159 14.8077 22 14.0812 22 13.327V6H21C19.8954 6 19 6.89543 19 8V13ZM19 13L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 13L5.65826 12.3417C6.41042 11.5896 7.61975 11.5578 8.41041 12.2694L11.0069 14.6062C11.639 15.1751 12 15.9856 12 16.8361V21H9.31349C8.4762 21 7.677 20.6501 7.10908 20.0348L2.79559 15.3619C2.28405 14.8077 2 14.0812 2 13.327V6H3C4.10457 6 5 6.89543 5 8V13ZM5 13L8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 7.43427C14.4347 8.3725 13.406 9 12.2308 9C10.4465 9 9 7.55354 9 5.76923C9 4.594 9.6275 3.56534 10.5657 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 4H14.009" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DuaIcon;
