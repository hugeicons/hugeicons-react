import * as React from "react";
import type { SVGProps } from "react";

interface CursorRectangleSelection01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CursorRectangleSelection01Icon = (props: CursorRectangleSelection01IconProps) => {
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
        <path d="M2 9.2L2 12.8M12.8 2L9.2 2M7.5 20H9M20 7.5V9M2.13343 4.69898C2.28806 3.97158 2.54837 3.42488 2.98663 2.98663C3.41266 2.56059 3.94119 2.3027 4.63858 2.14661M19.8666 4.69898C19.7119 3.97158 19.4516 3.42488 19.0134 2.98663C18.5963 2.5696 18.0811 2.31369 17.4054 2.15665M4.63858 19.8534C3.94119 19.6973 3.41266 19.4394 2.98663 19.0134C2.55627 18.583 2.2975 18.0481 2.14189 17.3402" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13.7813 20.9656C11.9693 21.0908 10.1739 12.64 11.4067 11.407C12.6396 10.174 21.091 11.9681 20.9657 13.7802C20.8795 14.9669 18.8709 15.4363 18.9295 16.491C18.9467 16.7999 19.3369 17.0814 20.1173 17.6445C20.6596 18.0358 21.2126 18.4157 21.7456 18.8195C21.9583 18.9807 22.0423 19.2516 21.9798 19.5071C21.6798 20.7341 20.7394 21.6785 19.5075 21.9798C19.252 22.0423 18.9811 21.9583 18.8199 21.7455C18.4162 21.2124 18.0363 20.6594 17.6451 20.117C17.0821 19.3365 16.8006 18.9463 16.4918 18.9291C15.4372 18.8704 14.9679 20.8793 13.7813 20.9656Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default CursorRectangleSelection01Icon;
