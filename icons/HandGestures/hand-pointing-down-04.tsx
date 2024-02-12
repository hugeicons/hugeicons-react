import * as React from "react";
import type { SVGProps } from "react";

interface HandPointingDown04IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const HandPointingDown04Icon = (props: HandPointingDown04IconProps) => {
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
        <path d="M10.7551 13.485V19.9954C10.7551 20.8264 10.0828 21.5 9.25337 21.5C8.42397 21.5 7.7516 20.8264 7.7516 19.9954V9.96807M10.7551 16.4892L11.8095 16.4624C12.8939 16.4347 13.7587 15.5461 13.7587 14.4593V13.4552M13.4774 15.4844L14.8131 15.4297C15.8975 15.4021 16.7622 14.5134 16.7622 13.4266V12.4226M16.4764 14.4593L18.0168 14.27C19.0161 14.135 19.7588 13.2759 19.7495 12.2657L19.7015 7.06579C19.7015 4.88227 17.5884 2.5 15.3223 2.5H10.4416C9.24932 2.5 7.83196 3.28085 6.60714 5.34841L4.99227 7.78577C4.41202 8.54219 3.58569 9.90362 5.15816 11.7712L7.7516 14.531" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default HandPointingDown04Icon;
