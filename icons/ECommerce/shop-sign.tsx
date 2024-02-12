import * as React from "react";
import type { SVGProps } from "react";

interface ShopSignIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ShopSignIcon = (props: ShopSignIconProps) => {
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
        <path d="M7.07007 2.5H15.7559C16.9383 2.5 17.5295 2.5 17.9484 2.8352C18.3673 3.1704 18.4891 3.74092 18.7327 4.88197L21.7654 19.088C22.0033 20.2028 22.1223 20.7602 21.818 21.1301C21.5136 21.5 20.936 21.5 19.7808 21.5H13.2369C12.4673 21.5 12.0825 21.5 11.806 21.2844C11.5296 21.0687 11.4409 20.6995 11.2635 19.9609L7.07007 2.5ZM7.07007 2.5L2 21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 16H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ShopSignIcon;
