import * as React from "react";
import type { SVGProps } from "react";

interface RotateLeft01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const RotateLeft01Icon = (props: RotateLeft01IconProps) => {
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
        <path d="M20.0072 14.5673L19.3588 14.1743C18.7986 13.8519 18.358 13.3576 18.1021 12.7646L15.6801 7.15217C15.5927 6.94981 15.4729 6.78104 15.3281 6.64213C14.6877 6.02805 13.5808 6.28813 13.0433 6.99342C12.0507 8.29564 13.384 9.52867 13.1023 10.6145L5.35914 6.26205C3.55805 5.29029 2.00246 7.8719 3.79283 9.06449L8.37613 11.6136C7.49346 12.7662 5.25518 18.3562 8.12347 20.061C8.28652 20.158 8.46726 20.2225 8.64858 20.2785C8.76523 20.3145 8.88192 20.3508 8.99767 20.3869C9.89796 20.6679 11.6004 21.0211 12.7668 20.9194C13.9812 20.8135 14.7422 21.4609 15.68 22.0007" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.3619 4.96465C9.75879 5.3603 11.4854 5.24616 12.1223 5.16671M9.3619 4.96465C8.96501 4.56901 8.95364 2.63697 9.03334 2.00208M9.3619 4.96465C10.383 3.19642 14.4425 0.375875 18.4709 3.19642C20.4176 4.55942 20.6923 5.41838 21.0001 5.99381" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default RotateLeft01Icon;
