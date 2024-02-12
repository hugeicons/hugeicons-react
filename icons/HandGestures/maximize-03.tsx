import * as React from "react";
import type { SVGProps } from "react";

interface Maximize03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Maximize03Icon = (props: Maximize03IconProps) => {
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
        <path d="M14.9237 7.78146L15.8142 8.02144C16.7977 8.28651 17.3815 9.30336 17.1179 10.2926M17.1179 10.2926L16.8793 11.1882M17.1179 10.2926C17.2497 9.798 17.7552 9.50446 18.247 9.63699C19.2306 9.90207 19.8143 10.9189 19.5508 11.9082M19.5508 11.9082L19.3121 12.8038M19.5508 11.9082C19.6757 11.4394 20.1892 11.1955 20.6285 11.3965L20.9198 11.5298C21.7401 11.9052 22.1705 12.8221 21.9373 13.6977L21.5855 15.0165C21.067 16.963 20.8076 17.9362 20.3064 18.6316C20.0157 19.035 19.4118 19.4866 18.9408 19.8036C18.5333 20.0778 18.221 20.4807 18.0941 20.957L17.8162 22M14.4462 9.57264L15.9972 3.75113C16.1949 3.00918 15.7571 2.24654 15.0194 2.04774C14.2817 1.84893 13.5234 2.28924 13.3258 3.03119L10.9485 11.9537L9.89349 10.1091C9.43058 9.29977 8.37226 9.07701 7.62507 9.63163C7.05334 10.056 6.83812 10.8163 7.10185 11.48L9.21015 16.4621C9.61353 17.4153 9.6232 18.7195 9.35662 19.7202" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.87479 4.63991C9.87479 4.63991 10.1205 2.41922 9.87479 2.17714M9.87479 2.17714C9.55602 1.86316 7.33416 2.12746 7.33416 2.12746M9.87479 2.17714L6.90237 5.11918M2.10872 7.36943C2.10872 7.36943 1.86301 9.59012 2.10872 9.8322M2.10872 9.8322C2.42748 10.1462 4.64934 9.88188 4.64934 9.88188M2.10872 9.8322L5.08113 6.89017" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Maximize03Icon;
