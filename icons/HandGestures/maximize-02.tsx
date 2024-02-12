import * as React from "react";
import type { SVGProps } from "react";

interface Maximize02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Maximize02Icon = (props: Maximize02IconProps) => {
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
        <path d="M7.86292 12.6599L9.99786 14.4911L12.6639 4.2639C12.8615 3.50593 13.5456 2.97705 14.3283 2.97705C15.4379 2.97705 16.2572 4.01269 16.0026 5.09338L14.801 10.1938L16.489 10.4639C18.4186 10.7535 19.3835 10.8983 20.063 11.3058C21.1856 11.9787 21.9988 12.9893 21.9988 14.4647C21.9988 15.4924 21.745 16.1818 21.128 18.0342C20.7365 19.2096 20.5407 19.7973 20.2215 20.2625C19.6959 21.0284 18.9205 21.5876 18.0283 21.8444C17.4863 22.0003 16.8673 22.0003 15.6292 22.0003H14.5798C12.9337 22.0003 12.1107 22.0003 11.3781 21.698C11.2467 21.6438 11.1182 21.5827 10.9934 21.5148C10.2969 21.1363 9.77798 20.4971 8.74003 19.2188L5.37984 15.0802C4.86348 14.4443 4.86004 13.5341 5.37157 12.8942C5.98639 12.1252 7.11568 12.0189 7.86292 12.6599Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.87145 4.61599C9.87145 4.61599 10.117 2.3953 9.87145 2.15321M9.87145 2.15321C9.5529 1.83924 7.33253 2.10353 7.33253 2.10353M9.87145 2.15321L6.90104 5.09525M2.1106 7.3455C2.1106 7.3455 1.86505 9.5662 2.1106 9.80828M2.1106 9.80828C2.42915 10.1223 4.64952 9.85796 4.64952 9.85796M2.1106 9.80828L5.08102 6.86624" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Maximize02Icon;
