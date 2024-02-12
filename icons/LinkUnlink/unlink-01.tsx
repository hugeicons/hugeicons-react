import * as React from "react";
import type { SVGProps } from "react";

interface Unlink01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Unlink01Icon = (props: Unlink01IconProps) => {
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
        <path d="M12.1434 10.691L12.3503 10.4841C14.329 8.50532 17.5372 8.50532 19.5159 10.4841C21.4947 12.4628 21.4947 15.671 19.5159 17.6497L16.6497 20.5159C14.671 22.4947 11.4628 22.4947 9.48405 20.5159C7.50532 18.5372 7.50532 15.329 9.48405 13.3503L9.9484 12.886" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20.0516 11.114L20.5159 10.6497C22.4947 8.67095 22.4947 5.46279 20.5159 3.48405C18.5372 1.50532 15.329 1.50532 13.3503 3.48405L10.4841 6.35031C8.50532 8.32904 8.50532 11.5372 10.4841 13.5159C12.4628 15.4947 15.671 15.4947 17.6497 13.5159L17.8566 13.309" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4.5 4L6 6M2 8L5 9M3 13.5L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Unlink01Icon;
