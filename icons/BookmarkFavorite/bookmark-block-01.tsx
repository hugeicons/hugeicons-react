import * as React from "react";
import type { SVGProps } from "react";

interface BookmarkBlock01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BookmarkBlock01Icon = (props: BookmarkBlock01IconProps) => {
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
        <path d="M14.1667 7.83333L18.8333 3.16667M20 5.5C20 7.433 18.433 9 16.5 9C14.567 9 13 7.433 13 5.5C13 3.567 14.567 2 16.5 2C18.433 2 20 3.567 20 5.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M19 11.5V17.9808C19 20.2867 19 21.4396 18.2272 21.8523C16.7305 22.6514 13.9232 19.9852 12.59 19.1824C11.8168 18.7168 11.4302 18.484 11 18.484C10.5698 18.484 10.1832 18.7168 9.41 19.1824C8.0768 19.9852 5.26947 22.6514 3.77285 21.8523C3 21.4396 3 20.2867 3 17.9808V9.70753C3 6.07416 3 4.25748 4.17157 3.12874C5.29018 2.05103 7.05974 2.00231 10.5 2.0001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.5 7H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default BookmarkBlock01Icon;
