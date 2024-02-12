import * as React from "react";
import type { SVGProps } from "react";

interface HandPointingDown01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const HandPointingDown01Icon = (props: HandPointingDown01IconProps) => {
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
        <path d="M8.83397 2.00138V2.94868C8.83397 3.59418 8.62523 4.22251 8.23867 4.74055L4.58024 9.64341C4.1583 10.2089 3.8213 10.9104 4.09987 11.5581C4.55082 12.6065 5.82305 13.2876 7.38027 11.7157L8.97786 10.0063V20.4294C9.03409 22.4726 12.3229 22.5739 12.4635 20.4294V14.4894C13.9439 14.6805 20.9175 13.6371 19.901 9.21686C19.8527 9.00686 19.8045 8.79374 19.7574 8.58346C19.5517 7.66469 18.9438 6.02726 18.2733 5.06998C17.5753 4.07344 17.8216 2.44361 17.8216 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default HandPointingDown01Icon;
