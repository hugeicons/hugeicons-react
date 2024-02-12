import * as React from "react";
import type { SVGProps } from "react";

interface CatalogueIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CatalogueIcon = (props: CatalogueIconProps) => {
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
        <path d="M2 12.4C2 9.38301 2 7.87452 2.94627 6.93726C3.89254 6 5.41554 6 8.46154 6H9.53846C12.5845 6 14.1075 6 15.0537 6.93726C16 7.87452 16 9.38301 16 12.4V15.6C16 18.617 16 20.1255 15.0537 21.0627C14.1075 22 12.5845 22 9.53846 22H8.46154C5.41554 22 3.89254 22 2.94627 21.0627C2 20.1255 2 18.617 2 15.6V12.4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M15.5376 16H16.4608C19.072 16 20.3776 16 21.1888 15.1799C22 14.3598 22 13.0399 22 10.4V7.6C22 4.96013 22 3.6402 21.1888 2.8201C20.3776 2 19.072 2 16.4608 2H15.5376C12.9264 2 11.6208 2 10.8096 2.8201C10.1002 3.53726 10.0112 4.63664 10 6.66667" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M6 12H9M6 17H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.5 3L14.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default CatalogueIcon;
