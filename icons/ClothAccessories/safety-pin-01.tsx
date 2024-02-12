import * as React from "react";
import type { SVGProps } from "react";

interface SafetyPin01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SafetyPin01Icon = (props: SafetyPin01IconProps) => {
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
        <path d="M13.5459 3.79364L12.2929 5.4104C11.2216 6.79272 13.3531 8.46736 14.4395 7.07557L14.8139 6.59591C15.5066 5.70846 16.8119 5.61801 17.5969 6.40307C18.382 7.18812 18.2915 8.49338 17.4041 9.18609L16.9244 9.56049C15.5326 10.6469 17.2073 12.7784 18.5896 11.7071L20.2064 10.4541C22.4319 8.7293 22.6147 5.42276 20.596 3.40405C18.5772 1.38533 15.2707 1.56805 13.5459 3.79364Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="4.5" cy="19.5" r="2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 17.4103L12 7M6.58974 21L17 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SafetyPin01Icon;
