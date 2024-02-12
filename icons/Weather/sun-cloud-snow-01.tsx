import * as React from "react";
import type { SVGProps } from "react";

interface SunCloudSnow01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SunCloudSnow01Icon = (props: SunCloudSnow01IconProps) => {
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
        <path d="M9 3.65468C8.30552 2.65451 7.15088 2 5.84388 2C3.72096 2 2 3.72674 2 5.85679C2 7.15354 2.63783 8.30081 3.61588 9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M17.4776 9.00915C17.485 9.00911 17.4925 9.00909 17.5 9.00909C19.9853 9.00909 22 11.0269 22 13.5159C22 15.4782 20.7478 16.8813 19 17.5M17.4776 9.00915C17.4924 8.8442 17.5 8.67716 17.5 8.50834C17.5 5.46617 15.0376 3 12 3C9.12324 3 6.76233 5.21197 6.52042 8.03032M17.4776 9.00915C17.3753 10.1453 16.9286 11.182 16.2428 12.0136M6.52042 8.03032C3.98398 8.27205 2 10.4116 2 13.0152C2 15.0686 3.2341 16.7103 5 17.5M6.52042 8.03032C6.67826 8.01527 6.83823 8.00758 7 8.00758C8.12582 8.00758 9.16474 8.38023 10.0005 9.00909" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.9978 17.9974L12.0022 18.0052M15.9955 16L16 16.0078M8 16L8.00449 16.0078M15.9955 19.9948L16 20.0026M8 19.9948L8.00449 20.0026M11.9978 21.9922L12.0022 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SunCloudSnow01Icon;
