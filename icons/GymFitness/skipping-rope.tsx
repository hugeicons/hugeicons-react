import * as React from "react";
import type { SVGProps } from "react";

interface SkippingRopeIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SkippingRopeIcon = (props: SkippingRopeIconProps) => {
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
        <path d="M7.99438 5.51731C7.99438 7.44821 9.78787 9.0135 12.0002 9.0135C14.2126 9.0135 16.006 7.44821 16.006 5.51731C16.006 3.58641 14.2126 2.02112 12.0002 2.02112C9.78787 2.02112 7.99438 3.58641 7.99438 5.51731Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4.51051 12.0004C3.66435 12.0176 2.86452 12.2081 2.59627 12.431C2.28778 12.897 2.98921 13.9355 3.09683 14.3725L2.74354 17.235L2.50409 19.748C2.35887 22.4168 6.37744 23.071 6.49196 19.748L5.87951 14.4275C6.14584 13.6305 6.78916 12.5762 6.31873 12.3298C5.83429 12.0759 5.1588 11.9873 4.51051 12.0004ZM4.51051 12.0004C4.46271 10.8028 4.39404 8.30009 4.78398 7.5083" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.4895 12.0004C20.3356 12.0175 21.1355 12.208 21.4037 12.431C21.7122 12.8969 21.0108 13.9354 20.9032 14.3724L21.2565 17.2349L21.4959 19.7479C21.6411 22.4167 17.6226 23.0709 17.508 19.7479L18.1205 14.4274C17.8542 13.6305 17.2108 12.5761 17.6813 12.3297C18.1657 12.0759 18.8412 11.9872 19.4895 12.0004ZM19.4895 12.0004C19.5288 11.0144 19.5876 9.27184 19.3852 8.13956C19.3085 7.71025 19.1794 7.29079 19.0344 6.87948C17.529 2.60896 10.8112 -0.61338 6.01084 4.98912" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SkippingRopeIcon;
