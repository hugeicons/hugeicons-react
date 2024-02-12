import * as React from "react";
import type { SVGProps } from "react";

interface Lamp05IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Lamp05Icon = (props: Lamp05IconProps) => {
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
        <path d="M14.9984 14C13.9731 14.8764 14.1962 16.4482 14.7712 17.487C15.3711 18.5704 15.7228 19.7991 15.3411 20.9591C15.138 21.5763 14.5053 22 13.7869 22H10.2247C9.52108 22 8.89821 21.5925 8.68423 20.9921C8.26479 19.8152 8.61255 18.555 9.21486 17.4437C9.76585 16.427 9.9953 14.8804 9.04299 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.5 14H15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.5936 10H9.40637C7.51043 10 6.56247 10 6.16052 9.45157C5.75858 8.90313 6.14759 8.14046 6.92562 6.61512L8.31723 3.88683C8.78446 2.97081 9.01808 2.5128 9.46755 2.2564C9.91703 2 10.4863 2 11.6249 2H12.3751C13.5137 2 14.083 2 14.5324 2.2564C14.9819 2.5128 15.2155 2.97081 15.6828 3.88683L17.0744 6.61512C17.8524 8.14046 18.2414 8.90313 17.8395 9.45157C17.4375 10 16.4896 10 14.5936 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 10L12 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 19H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Lamp05Icon;
