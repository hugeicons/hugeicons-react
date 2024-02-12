import * as React from "react";
import type { SVGProps } from "react";

interface RenewableEnergy01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const RenewableEnergy01Icon = (props: RenewableEnergy01IconProps) => {
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
        <path d="M18 7.26294C20.412 8.60838 22 10.8996 22 13.5C22 15.5586 21.0047 17.4235 19.3933 18.7787C19.1517 18.9819 19 19.2762 19 19.5919V22H17L16.2062 20.8674C16.083 20.6916 15.8616 20.6152 15.6537 20.6687C13.9248 21.1132 12.0752 21.1132 10.3463 20.6687C10.1384 20.6152 9.91703 20.6916 9.79384 20.8674L9 22H7V19.6154C7 19.2866 6.83835 18.9788 6.56764 18.7921C5.49285 18.0511 2 16.6014 2 15.0582V13.5C2 12.9082 2.44771 12.4286 3 12.4286C3.60665 12.4286 4.10188 12.1929 4.30205 11.5661C4.87123 9.78376 6.20828 8.26239 8 7.26294" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.5 2L11 6H15L12.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.49981 12H7.50879" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default RenewableEnergy01Icon;
