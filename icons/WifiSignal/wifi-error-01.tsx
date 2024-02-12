import * as React from "react";
import type { SVGProps } from "react";

interface WifiError01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const WifiError01Icon = (props: WifiError01IconProps) => {
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
        <path d="M18.5 9.99773C14.7324 6.66547 9.5 6.66547 5.5 9.99773" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 6.99872C8.31579 1.66712 15.6842 1.66711 22 6.99861" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.9929 14.9854V16.4966M11.9929 18.4674V18.4985M12.1439 12.0076C12.4929 11.9943 13.3745 12.1632 14.2344 13.6826L16.3879 17.3744C17.2104 18.5923 17.6149 20.778 14.5868 20.9419L11.9995 21.0003L9.38361 20.9261C6.35557 20.7622 6.82158 18.5939 7.58254 17.3586L9.73603 13.6669C10.596 12.1474 11.4776 11.9786 11.8266 11.9919L12.1439 12.0076Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default WifiError01Icon;
