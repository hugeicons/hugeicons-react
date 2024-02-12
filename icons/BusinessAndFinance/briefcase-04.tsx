import * as React from "react";
import type { SVGProps } from "react";

interface Briefcase04IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Briefcase04Icon = (props: Briefcase04IconProps) => {
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
        <path d="M2.57198 8.22365C2.51219 7.73035 2.48229 7.4837 2.51104 7.28193C2.59477 6.69433 3.00682 6.213 3.56187 6.05444C3.75245 6 3.99351 6 4.47562 6H19.5244C20.0065 6 20.2475 6 20.4381 6.05444C20.9932 6.213 21.4052 6.69433 21.489 7.28193C21.5177 7.4837 21.4878 7.73035 21.428 8.22365C21.2687 9.53773 21.1891 10.1948 20.9939 10.7377C20.429 12.3094 19.138 13.4846 17.5556 13.8676C17.0089 14 16.3668 14 15.0826 14H8.91743C7.63318 14 6.99105 14 6.44436 13.8676C4.86198 13.4846 3.571 12.3094 3.00609 10.7377C2.81092 10.1948 2.73128 9.53773 2.57198 8.22365Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 11H12.009" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.5 12L3.5 15.02C3.5 18.0747 3.5 19.6021 4.60649 20.551C5.71297 21.5 7.49383 21.5 11.0556 21.5H12.9444C16.5062 21.5 18.287 21.5 19.3935 20.551C20.5 19.6021 20.5 18.0747 20.5 15.02V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 6L15.9117 5.69094C15.4717 4.15089 15.2517 3.38087 14.7279 2.94043C14.2041 2.5 13.5084 2.5 12.117 2.5H11.883C10.4916 2.5 9.79587 2.5 9.2721 2.94043C8.74832 3.38087 8.52832 4.15089 8.0883 5.69094L8 6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default Briefcase04Icon;
