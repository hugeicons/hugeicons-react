import * as React from "react";
import type { SVGProps } from "react";

interface ContainerTruckIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ContainerTruckIcon = (props: ContainerTruckIconProps) => {
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
        <path d="M10 9V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="17" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="7" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 17.9724C3.90328 17.9178 3.2191 17.7546 2.73223 17.2678C2 16.5355 2 15.357 2 13V9C2 6.64298 2 5.46447 2.73223 4.73223C3.46447 4 4.64298 4 7 4H10.3C11.4168 4 11.9752 4 12.4271 4.14683C13.3404 4.44358 14.0564 5.15964 14.3532 6.07295C14.5 6.52485 14.5 7.08323 14.5 8.2C14.5 8.94451 14.5 9.31677 14.5979 9.61803C14.7957 10.2269 15.2731 10.7043 15.882 10.9021C16.1832 11 16.5555 11 17.3 11H22V13C22 15.357 22 16.5355 21.2678 17.2678C20.7809 17.7546 20.0967 17.9178 19 17.9724M9 18H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.5 6H16.3212C17.7766 6 18.5042 6 19.0964 6.35371C19.6886 6.70742 20.0336 7.34811 20.7236 8.6295L22 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 9V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default ContainerTruckIcon;
