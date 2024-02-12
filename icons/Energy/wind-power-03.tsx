import * as React from "react";
import type { SVGProps } from "react";

interface WindPower03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const WindPower03Icon = (props: WindPower03IconProps) => {
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
        <path d="M14 10.8664C14 11.9719 13.1046 12.868 12 12.868C10.8954 12.868 10 11.9719 10 10.8664C10 9.76091 10.8954 8.86475 12 8.86475C13.1046 8.86475 14 9.76091 14 10.8664Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13.9907 10.6843L20 14.3678C19.1716 15.8036 17.3368 16.2955 15.9019 15.4666L11.7373 12.8487" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.484 9.50442L13.484 2.36756C11.8271 2.36752 10.5168 3.71185 10.5168 5.36969C10.5168 5.36969 10.5168 7.88973 10.5168 9.50445" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.007 10.6865L4 14.3681C4.82843 15.8039 6.6632 16.2958 8.09808 15.4669L12.2617 12.8502" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.4502 16.8694L13.7702 18.8916C13.9962 20.4963 14.1092 21.2987 13.8547 21.8356C13.6001 22.3725 13.1067 22.3726 12.1199 22.3726H11.8801C10.8933 22.3726 10.3999 22.3725 10.1453 21.8356C9.89078 21.2987 10.0038 20.4963 10.2298 18.8916L10.5498 16.8694" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default WindPower03Icon;
