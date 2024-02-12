import * as React from "react";
import type { SVGProps } from "react";

interface Uv02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Uv02Icon = (props: Uv02IconProps) => {
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
        <path d="M12 3V4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 13C17 10.2386 14.7614 8 12 8C9.23858 8 7 10.2386 7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5.98828 6.98926L4.92762 5.9286" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 13L20.5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3.5 13L2 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19.0703 5.92871L18.0097 6.98937" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6.5 16V19C6.5 19.9428 6.5 20.4142 6.79289 20.7071C7.08579 21 7.55719 21 8.5 21V21C9.44281 21 9.91421 21 10.2071 20.7071C10.5 20.4142 10.5 19.9428 10.5 19V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13.5 16L15.5 21L17.5 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Uv02Icon;
