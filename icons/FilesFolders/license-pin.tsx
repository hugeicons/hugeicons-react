import * as React from "react";
import type { SVGProps } from "react";

interface LicensePinIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LicensePinIcon = (props: LicensePinIconProps) => {
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
        <path d="M19.9971 9C19.988 5.8857 19.8895 4.23467 18.8264 3.17157C17.6549 2 15.7692 2 11.998 2H9.99805C6.22681 2 4.3412 2 3.16962 3.17157C1.99805 4.34315 1.99805 6.22876 1.99805 10V14C1.99805 17.7712 1.99805 19.6569 3.16962 20.8284C4.3412 22 6.22681 22 9.99805 22H11.998C12.7335 22 13.3973 22 13.998 21.9913" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.99805 7H14.998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6.99805 12H13.998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6.99805 17H11.998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19.0049 19V22M16.0101 17.5C16.1527 18.3145 17.1894 18.6556 18.4061 18.8923C18.5171 18.9138 19.4355 18.867 19.5468 18.8477C20.4341 18.6937 22.0586 18.3917 21.9997 17.5C21.9303 16.4501 21.1525 16.0966 20.4447 15.4615C20.1547 15.2013 20.1147 14.7766 20.2888 14.4277L20.6914 13.6211C20.8778 13.2477 20.8234 12.785 20.5035 12.5173C20.0319 12.1224 19.6296 11.9995 19.0049 12C18.293 12.0691 17.8772 12.2142 17.4889 12.5268C17.1712 12.7825 17.1278 13.2392 17.31 13.6043L17.6962 14.378C17.8828 14.7519 17.819 15.2051 17.506 15.4816C16.6943 16.1985 15.8733 16.7183 16.0101 17.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default LicensePinIcon;
