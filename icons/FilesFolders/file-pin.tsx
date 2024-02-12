import * as React from "react";
import type { SVGProps } from "react";

interface FilePinIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FilePinIcon = (props: FilePinIconProps) => {
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
        <path d="M20.0154 9.5V7.81818C20.0154 6.12494 20.0154 5.27832 19.7471 4.60214C19.3159 3.5151 18.4039 2.65765 17.2478 2.2522C16.5286 2 15.6282 2 13.8273 2C10.6757 2 9.09989 2 7.84134 2.44135C5.81806 3.15089 4.2221 4.65142 3.46747 6.55375C2.99805 7.73706 2.99805 9.21865 2.99805 12.1818V14.7273C2.99805 17.7966 2.99805 19.3313 3.84661 20.3971C4.08974 20.7025 4.37807 20.9736 4.70285 21.2022C5.8364 22 7.46867 22 10.7332 22H11.5067C12.042 22 13.0082 22 13.5088 21.9972" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.998 17H6.99805" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.998 13H9.99805" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.0049 19V22M15.0101 17.5C15.1527 18.3145 16.1894 18.6556 17.4061 18.8923C17.5171 18.9138 18.4355 18.867 18.5468 18.8477C19.4341 18.6937 21.0586 18.3917 20.9997 17.5C20.9303 16.4501 20.1525 16.0966 19.4447 15.4615C19.1547 15.2013 19.1147 14.7766 19.2888 14.4277L19.6914 13.6211C19.8778 13.2477 19.8234 12.785 19.5035 12.5173C19.0319 12.1224 18.6296 11.9995 18.0049 12C17.293 12.0691 16.8772 12.2142 16.4889 12.5268C16.1712 12.7825 16.1278 13.2392 16.31 13.6043L16.6962 14.378C16.8828 14.7519 16.819 15.2051 16.506 15.4816C15.6943 16.1985 14.8733 16.7183 15.0101 17.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.99805 12C2.99805 10.1591 4.49195 8.66667 6.33478 8.66667C7.00125 8.66667 7.78697 8.78333 8.43496 8.60988C9.01069 8.45576 9.46039 8.00652 9.61467 7.43136C9.78829 6.78404 9.67151 5.99912 9.67151 5.33333C9.67151 3.49238 11.1655 2 13.0082 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FilePinIcon;
