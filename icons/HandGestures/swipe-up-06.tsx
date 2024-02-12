import * as React from "react";
import type { SVGProps } from "react";

interface SwipeUp06IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SwipeUp06Icon = (props: SwipeUp06IconProps) => {
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
        <path d="M18.5005 1.99805V7.99805M18.5005 1.99805C17.8003 1.99805 16.492 3.99235 16.0005 4.49805M18.5005 1.99805C19.2007 1.99805 20.509 3.99235 21.0005 4.49805" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.51233 13.5147V3.48575C6.51233 2.66411 7.17917 1.99805 8.00176 1.99805C8.82435 1.99805 9.49119 2.66411 9.49119 3.48575V8.68783M9.49119 8.68783V11.0115M9.49119 8.68783C10.2961 7.56941 12.0987 7.94193 12.4824 9.68079C12.4887 9.70965 12.4939 9.73874 12.4981 9.76798M12.5132 11.0075V10.0046C12.5132 9.9255 12.5093 9.84619 12.4981 9.76798M12.4981 9.76798C12.9913 8.41762 15.2558 8.93261 15.5024 10.8609M15.5024 10.8609V12.0069M15.5024 10.8609C15.9063 9.37034 18.5581 10.4121 18.5007 12.1544V15.3329C18.4977 17.059 18.2096 18.3105 17.1835 19.34C16.2355 20.4718 16.4585 21.1053 16.4349 22.0017M6.51233 8.9905C5.1934 10.1843 3.69642 11.8159 3.5053 12.2023C2.61598 13.5544 2.93227 14.6153 4.19609 16.4175C5.13663 17.7587 6.3981 19.2534 6.46418 19.3282C7.13679 20.0896 7.00497 20.6958 7.00497 21.9907" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default SwipeUp06Icon;
