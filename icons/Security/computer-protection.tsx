import * as React from "react";
import type { SVGProps } from "react";

interface ComputerProtectionIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ComputerProtectionIcon = (props: ComputerProtectionIconProps) => {
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
        <path d="M10.014 2C6.23617 2 4.34725 2 3.17362 3.17157C2 4.34315 2 6.22876 2 10C2 13.7712 2 15.6569 3.17362 16.8284C4.34725 18 6.23617 18 10.014 18H14.021C17.7989 18 19.6878 18 20.8614 16.8284C21.671 16.0203 21.9221 14.8723 22 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 18V22" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 22H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 15H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.4991 2C16.0744 2 15.1506 2.90855 14.0581 3.23971C13.6138 3.37436 13.3917 3.44168 13.3018 3.53659C13.2119 3.6315 13.1856 3.77019 13.133 4.04756C12.5696 7.0157 13.801 9.75979 16.7375 10.8279C17.053 10.9426 17.2108 11 17.5007 11C17.7906 11 17.9484 10.9426 18.2639 10.8279C21.2002 9.75978 22.4304 7.01569 21.8669 4.04756C21.8142 3.77014 21.7879 3.63143 21.698 3.53652C21.6081 3.44161 21.386 3.37432 20.9418 3.23974C19.8488 2.90862 18.9239 2 17.4991 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ComputerProtectionIcon;
