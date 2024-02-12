import * as React from "react";
import type { SVGProps } from "react";

interface SignalNo01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SignalNo01Icon = (props: SignalNo01IconProps) => {
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
        <path d="M5 10L5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5.80844 9.28111C5.43534 9.76037 5.2488 10 5 10C4.7512 10 4.56466 9.76037 4.19156 9.28112L3.44578 8.32312C2.37255 6.94451 1.83594 6.25521 2.04429 5.68812C2.06552 5.63034 2.0916 5.57458 2.12224 5.52145C2.423 5 3.282 5 5 5C6.718 5 7.577 5 7.87776 5.52145C7.9084 5.57458 7.93448 5.63034 7.95571 5.68812C8.16406 6.25521 7.62745 6.94451 6.55422 8.32312L5.80844 9.28111Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18.4297 9L12.4297 15M18.4297 15L12.4297 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 19L13 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 19L9 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 19L17 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 19L21 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default SignalNo01Icon;