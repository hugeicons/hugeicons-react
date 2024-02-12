import * as React from "react";
import type { SVGProps } from "react";

interface DragLeft01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DragLeft01Icon = (props: DragLeft01IconProps) => {
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
        <path d="M10.6821 8.48865C9.6671 7.87721 8.98828 6.76466 8.98828 5.49361C8.98828 3.5638 10.553 1.99939 12.4833 1.99939C14.4135 1.99939 15.9783 3.5638 15.9783 5.49361C15.9783 6.76466 15.2994 7.87721 14.2845 8.48865" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10.553 21.9346L10.5784 21.3042C10.6032 20.688 10.4414 20.075 10.0986 19.5598C8.75005 17.5327 7.71953 16.3784 6.30717 14.4011C6.19531 14.2445 6.09068 14.0787 6.0466 13.8917C5.70602 12.4468 7.46581 10.5664 9.09583 12.7321L10.6871 14.3644L10.6871 6.32367C10.8981 4.67606 13.4908 4.34924 13.928 6.32365L13.928 10.0657C15.5452 9.91845 22.0819 11.0438 20.8482 15.5306C20.7904 15.7409 20.7351 15.9556 20.678 16.1661C20.4702 16.9327 19.962 18.052 19.4727 19.0061C18.9286 20.067 19.0718 21.5657 18.9796 22.0008" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8.71865 4.98889H2.99805M2.99805 4.98889C3.1371 5.42426 3.5156 5.68816 3.83946 5.98463L5.02718 6.99032M2.99805 4.98889C3.11123 4.54612 3.52373 4.25968 3.83946 3.96035L5.02718 2.94177" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DragLeft01Icon;
