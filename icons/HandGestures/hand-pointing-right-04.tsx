import * as React from "react";
import type { SVGProps } from "react";

interface HandPointingRight04IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const HandPointingRight04Icon = (props: HandPointingRight04IconProps) => {
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
        <path d="M13.485 10.7551L16.4892 10.7551M16.4892 10.7551H19.9954C20.8264 10.7551 21.5 10.0828 21.5 9.25337C21.5 8.42397 20.8264 7.7516 19.9954 7.7516L14.531 7.7516M16.4892 10.7551L16.4624 11.8095C16.4443 12.5205 16.056 13.1371 15.4844 13.4774M14.531 7.7516L9.96807 7.7516M14.531 7.7516L11.7712 5.15816C9.90362 3.58569 8.54219 4.41202 7.78577 4.99227L5.34841 6.60714C3.28085 7.83196 2.5 9.24932 2.5 10.4416V15.3223C2.5 17.5884 4.88227 19.7015 7.06579 19.7015L12.2657 19.7495C13.2759 19.7588 14.135 19.0161 14.27 18.0168L14.4593 16.4764M13.4552 13.7587H14.4593C14.8335 13.7587 15.1842 13.6562 15.4844 13.4774M15.4844 13.4774L15.4297 14.8131C15.4021 15.8975 14.5134 16.7622 13.4266 16.7622H12.4226" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default HandPointingRight04Icon;
