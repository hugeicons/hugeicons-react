import * as React from "react";
import type { SVGProps } from "react";

interface AiFolder02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AiFolder02Icon = (props: AiFolder02IconProps) => {
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
        <path d="M7 6.00098H16.75C18.8567 6.00098 19.91 6.00098 20.6667 6.50657C20.9943 6.72545 21.2755 7.0067 21.4944 7.33427C22 8.09094 22 9.14429 22 11.251C22 14.7622 22 16.5177 21.1573 17.7789C20.975 18.0518 20.7666 18.3055 20.5355 18.5365M3.46447 18.5365C2 17.0721 2 14.715 2 10.001V6.94525C2 5.12878 2 4.22054 2.38032 3.53904C2.65142 3.05325 3.05227 2.6524 3.53806 2.3813C4.21956 2.00098 5.1278 2.00098 6.94427 2.00098C8.10802 2.00098 8.6899 2.00098 9.19926 2.19199C10.3622 2.6281 10.8418 3.68456 11.3666 4.73411L12 6.00098" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.4499 12.001V13.98M6.96289 15.5014H9.01487M14.986 15.5014H17.0379M14.986 18.4746H17.0379M6.96289 18.4746H9.01487M10.4499 20.0202V21.9992M13.4754 20.0202V21.9992M13.4646 12.001V13.98M10.0149 19.9685H13.986C14.5382 19.9685 14.986 19.5208 14.986 18.9685V14.98C14.986 14.4277 14.5382 13.98 13.986 13.98H10.0149C9.46258 13.98 9.01487 14.4277 9.01487 14.98V18.9685C9.01487 19.5208 9.46258 19.9685 10.0149 19.9685Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default AiFolder02Icon;
