import * as React from "react";
import type { SVGProps } from "react";

interface Csv01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Csv01Icon = (props: Csv01IconProps) => {
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
        <path d="M3.5 13V12.1963C3.5 9.22892 3.5 7.74523 3.96894 6.56024C4.72281 4.65521 6.31714 3.15255 8.33836 2.44201C9.59563 2.00003 11.1698 2.00003 14.3182 2.00003C16.1173 2.00003 17.0168 2.00003 17.7352 2.25259C18.8902 2.65861 19.8012 3.51728 20.232 4.60587C20.5 5.283 20.5 6.13082 20.5 7.82646V12.0142V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.5 12C3.5 10.1591 4.99238 8.66667 6.83333 8.66667C7.49912 8.66667 8.28404 8.78333 8.93137 8.60988C9.50652 8.45576 9.95576 8.00652 10.1099 7.43136C10.2833 6.78404 10.1667 5.99912 10.1667 5.33333C10.1667 3.49238 11.6591 2 13.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.5 17.2196C7.44458 16.0292 6.62155 16 5.50505 16C3.78514 16 3.5 16.406 3.5 18V20C3.5 21.594 3.78514 22 5.50505 22C6.62154 22 7.44458 21.9708 7.5 20.7804M20.5 16L18.7229 20.6947C18.3935 21.5649 18.2288 22 17.968 22C17.7071 22 17.5424 21.5649 17.213 20.6947L15.4359 16M12.876 16H11.6951C11.2231 16 10.9872 16 10.8011 16.0761C10.1672 16.3354 10.1758 16.9448 10.1758 17.5C10.1758 18.0553 10.1672 18.6647 10.8011 18.9239C10.9872 19 11.2232 19 11.6951 19C12.167 19 12.4029 19 12.5891 19.0761C13.2229 19.3354 13.2143 19.9447 13.2143 20.5C13.2143 21.0553 13.2229 21.6647 12.5891 21.9239C12.4029 22 12.167 22 11.6951 22H10.4089" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default Csv01Icon;
