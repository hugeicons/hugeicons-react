import * as React from "react";
import type { SVGProps } from "react";

interface LegalDocument01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LegalDocument01Icon = (props: LegalDocument01IconProps) => {
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
        <path d="M3 14V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11.3333 10.6667C12.3883 11.7216 13.7778 12.7937 13.7778 12.7937L15.6825 10.8889C15.6825 10.8889 14.6105 9.49939 13.5556 8.44444C12.5006 7.3895 11.1111 6.31746 11.1111 6.31746L9.20635 8.22222C9.20635 8.22222 10.2784 9.61172 11.3333 10.6667ZM11.3333 10.6667L8 14M16 10.5714L13.4603 13.1111M11.4286 6L8.88889 8.53968" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 18H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default LegalDocument01Icon;
