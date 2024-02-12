import * as React from "react";
import type { SVGProps } from "react";

interface SalahTimeIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const SalahTimeIcon = (props: SalahTimeIconProps) => {
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
        <path d="M15.0092 5.00163C13.7435 3.18746 11.3856 2.00049 9.00543 2.00049C5.13698 2.00049 2.00098 5.13569 2.00098 9.00316C2.00098 12.7025 4.87016 15.7493 8.50511 16.0058" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9.00486 7.00244V9.5034L7.50391 10.5038" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.6148 15.5486C11.2537 13.8925 11.0215 12.2295 12.969 10.2102C15.0149 8.38506 16.1931 7.52188 16.507 7.00244C16.8209 7.52188 18.0182 8.38506 20.0641 10.2102C21.9183 11.8643 21.8017 13.8925 20.4405 15.5486M12.6148 15.5486H12.0923M12.6148 15.5486H20.4405M20.4405 15.5486H20.9009M11.0215 15.5486H12.0923M12.0923 15.5486V21.0934C12.1323 21.7611 12.0923 22.0727 13.3035 21.9852H16.4881M20.9009 15.5486H22.0001M20.9009 15.5486V21.1949C21.0177 22.1018 20.2956 21.9427 19.8338 21.9852H16.4881M16.4881 21.9852L16.5235 19.8507" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default SalahTimeIcon;
