import * as React from "react";
import type { SVGProps } from "react";

interface Pickup01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Pickup01Icon = (props: Pickup01IconProps) => {
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
        <path d="M19.0009 17.5C20.4237 17.5 21.0618 17.5 21.5139 17.0126C21.5332 16.9917 21.5521 16.9702 21.5706 16.9482C22 16.435 22 15.6275 22 14.0125C22 12.7875 22 12.175 21.76 11.6578C21.5094 11.1178 21.0577 10.7814 20.1078 10.0931C19.1644 9.40947 18.4936 8.64105 17.8545 7.58239C16.9429 6.07263 16.4872 5.31775 15.8037 4.90888C15.1201 4.5 14.314 4.5 12.7016 4.5H12.0028M12.0028 4.5L13.1209 7.97979C13.6687 9.68471 13.9426 10.5372 14.5139 11.0186C15.0851 11.5 15.8227 11.5 17.2978 11.5H21.0002M12.0028 4.5L12.0027 17.5M9.00366 17.5H15.002M22.0002 14.5H21.0002M12.0027 11.5H3.00526C3.00526 11.5 2.68378 11.5044 2.40543 11.5C1.94386 11.4928 2.00554 11.48 2.00554 11.54L2.00554 12.5C2.00554 12.5 1.98554 15.8 2.02153 16.1932C2.02153 16.4519 2.22548 16.6634 2.58538 16.88C2.82077 17.0365 3.19075 17.2856 3.48512 17.4044C3.84502 17.54 5.0047 17.5 5.0047 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.0014 19.5C18.1057 19.5 19.0008 18.6046 19.0008 17.5C19.0008 16.3954 18.1057 15.5 17.0014 15.5C15.8971 15.5 15.002 16.3954 15.002 17.5C15.002 18.6046 15.8971 19.5 17.0014 19.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7.00432 19.5C8.10858 19.5 9.00376 18.6046 9.00376 17.5C9.00376 16.3954 8.10858 15.5 7.00432 15.5C5.90006 15.5 5.00488 16.3954 5.00488 17.5C5.00488 18.6046 5.90006 19.5 7.00432 19.5Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default Pickup01Icon;
