import * as React from "react";
import type { SVGProps } from "react";

interface BodyWeightIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BodyWeightIcon = (props: BodyWeightIconProps) => {
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
        <path d="M12.0018 14.0034V12.3621M12.0018 14.0034C10.3356 14.0034 8.66947 13.821 7.00329 13.4565M12.0018 14.0034C13.6684 14.0034 15.3351 13.8212 17.0018 13.4565M7.00329 13.4565C5.7284 13.1776 4.45352 12.7918 3.17863 12.2995C2.66907 12.1026 2.41429 12.0042 2.23947 11.7788C1.94941 11.4049 2.00183 10.8841 2.00183 10.4387C2.00183 9.20572 2.00183 7.58804 2.30263 7.26609C2.87209 6.65661 3.95918 7.21761 4.59146 7.42272C9.53171 9.02529 14.4719 9.02529 19.4122 7.42272C20.0444 7.21761 21.1315 6.65661 21.701 7.26609C22.0018 7.58804 22.0018 9.20572 22.0018 10.4387C22.0018 11.0571 22.0018 11.3663 21.8658 11.6217C21.6568 12.0141 21.2154 12.1487 20.825 12.2995C19.5506 12.7916 18.2762 13.1776 17.0018 13.4565M7.00329 13.4565L7.00183 11.8149M17.0018 13.4565V11.8149" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.0021 19.0093C14.3354 20.3455 9.66871 20.3455 5.00204 19.0093" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.1906 2.99768C18.6137 4.30901 18.0835 6.55702 18.0835 7.58736M4.81504 2.99768C5.39198 4.30901 5.92213 6.55702 5.92213 7.58736M5.39873 15.5103C4.9599 16.8912 3.80011 19.6214 4.00386 21.0022M18.6138 15.5103C19.0527 16.8912 20.2125 19.6214 20.0087 21.0022" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default BodyWeightIcon;
