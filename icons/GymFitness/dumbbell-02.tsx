import * as React from "react";
import type { SVGProps } from "react";

interface Dumbbell02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Dumbbell02Icon = (props: Dumbbell02IconProps) => {
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
        <path d="M16 7.99963C15.7562 8.731 15.2546 9.2924 14.5446 9.60716C12.2642 10.6181 10.6185 12.2638 9.60753 14.5442C9.29277 15.2542 8.73137 15.7558 8 15.9996" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M3.2 20.7996L2 21.9996M20.8 3.19963L22 1.99963" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.7882 2.42078L16.276 3.87393L20.1166 7.7504L21.5942 6.31567C22.0377 5.79327 22.1735 5.39976 21.6214 4.67498L20.5156 3.51207L19.3946 2.40627C18.678 1.76351 18.1136 2.10936 17.7882 2.42078Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.0115 3.75639C15.1221 2.58257 15.8827 3.41799 16.2733 3.88318L20.081 7.70615C20.5549 8.08609 21.4219 8.81505 20.276 9.95013C20.0911 10.1333 19.9098 10.3251 19.7089 10.4904C18.967 11.1007 18.255 10.5947 17.8777 10.1299L14.002 6.25421C13.5939 5.88765 12.8888 5.2235 13.4843 4.33572C13.6448 4.13083 13.8326 3.94544 14.0115 3.75639Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.58743 21.6195L3.44609 20.4914L2.36213 19.3493C1.71891 18.706 2.09 18.0628 2.40765 17.7435L3.88972 16.2596L7.74631 20.1329L6.22834 21.624C5.69748 22.0572 5.33348 22.19 4.6195 21.624M6.22333 13.9237C5.83272 13.4585 5.07209 12.623 3.96149 13.7969C3.78262 13.9859 3.59481 14.1713 3.43432 14.3762C2.83883 15.264 3.54386 15.9281 3.95194 16.2947L7.82772 20.1704C8.20497 20.6352 8.91698 21.1412 9.65885 20.5309C9.85984 20.3655 10.0411 20.1738 10.226 19.9906C11.3719 18.8555 10.5049 18.1266 10.031 17.7466L6.22333 13.9237Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Dumbbell02Icon;
