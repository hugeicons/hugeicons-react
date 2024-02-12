import * as React from "react";
import type { SVGProps } from "react";

interface Hexagon01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Hexagon01Icon = (props: Hexagon01IconProps) => {
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
        <path d="M8.88231 3.32966C10.4038 2.44322 11.1646 2 12 2C12.8354 2 13.5962 2.44322 15.1177 3.32966L17.8823 4.94031C19.4038 5.82675 20.1646 6.26997 20.5823 7C21 7.73003 21 8.61647 21 10.3894V13.6106C21 15.3835 21 16.27 20.5823 17C20.1646 17.73 19.4038 18.1733 17.8823 19.0597L15.1177 20.6703C13.5962 21.5568 12.8354 22 12 22C11.1646 22 10.4038 21.5568 8.88231 20.6703L6.11769 19.0597C4.59615 18.1733 3.83538 17.73 3.41769 17C3 16.27 3 15.3835 3 13.6106V10.3894C3 8.61647 3 7.73003 3.41769 7C3.83538 6.26997 4.59615 5.82675 6.11769 4.94031L8.88231 3.32966Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default Hexagon01Icon;
