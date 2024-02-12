import * as React from "react";
import type { SVGProps } from "react";

interface EarRings02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const EarRings02Icon = (props: EarRings02IconProps) => {
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
        <path d="M4 14.0059C7.6 14.0059 6.4 18.0059 10 18.0059" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 14.0059C17.6 14.0059 16.4 18.0059 20 18.0059" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 21.0002C8.65685 21.0002 10 18.5386 10 15.502C10 12.4655 8.65685 10.0039 7 10.0039C5.34315 10.0039 4 12.4655 4 15.502C4 18.5386 5.34315 21.0002 7 21.0002Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 21.0002C18.6569 21.0002 20 18.5386 20 15.502C20 12.4655 18.6569 10.0039 17 10.0039C15.3431 10.0039 14 12.4655 14 15.502C14 18.5386 15.3431 21.0002 17 21.0002Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9.95511 7.23465C9.60461 7.03318 9.06061 6.71331 8.93297 4.78823C8.81979 3.08119 7.26883 2.90993 6.67606 3.03033C6.11908 3.14352 5.07565 3.73158 5.00769 4.95468C4.96211 5.77441 5.47047 6.56073 6.67279 7.0392C6.87541 7.11984 7.0183 7.31015 7.0183 7.52816V9.76248" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.937 7.23465C19.5865 7.03318 19.0425 6.71331 18.9149 4.78823C18.8017 3.08119 17.2508 2.90993 16.658 3.03033C16.101 3.14352 15.0576 3.73158 14.9896 4.95468C14.944 5.77441 15.4524 6.56073 16.6547 7.0392C16.8573 7.11984 17.0002 7.31015 17.0002 7.52816V9.76248" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default EarRings02Icon;
