import * as React from "react";
import type { SVGProps } from "react";

interface Upload03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Upload03Icon = (props: Upload03IconProps) => {
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
        <path d="M6.9375 10C6.24657 10.0051 5.83081 10.0263 5.49965 10.114C3.99243 10.5131 2.96053 11.8639 3.00116 13.3847C3.01293 13.8252 3.18062 14.3696 3.516 15.4585C4.32314 18.079 5.67963 20.3539 8.71845 20.8997C9.27704 21 9.90561 21 11.1627 21L12.8373 21C14.0944 21 14.723 21 15.2816 20.8997C18.3204 20.3539 19.6769 18.079 20.484 15.4585C20.8194 14.3696 20.9871 13.8252 20.9988 13.3847C21.0395 11.8639 20.0076 10.5131 18.5004 10.114C18.1692 10.0263 17.7534 10.0051 17.0625 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 3L12 14M12 3C12.4684 3 12.8244 3.4381 13.5364 4.3143L14.5 5.5M12 3C11.5316 3 11.1756 3.4381 10.4636 4.3143L9.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Upload03Icon;
