import * as React from "react";
import type { SVGProps } from "react";

interface HandPointingRight01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const HandPointingRight01Icon = (props: HandPointingRight01IconProps) => {
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
        <path d="M2 8.83422H2.94868C3.59418 8.83422 4.22251 8.62547 4.74055 8.23892L9.64341 4.58048C10.2089 4.15855 10.9104 3.82155 11.5581 4.10011C12.6065 4.55106 13.2876 5.8233 11.7157 7.38052L10.0063 8.9781L20.4294 8.9781C22.4726 9.03433 22.5739 12.3231 20.4294 12.4638H14.4894C14.6805 13.9441 13.6371 20.9177 9.21687 19.9012C9.00686 19.853 8.79375 19.8048 8.58346 19.7577C7.6647 19.552 6.02726 18.944 5.06998 18.2735C4.07344 17.5756 3.08083 17.8219 2 17.8219" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default HandPointingRight01Icon;
