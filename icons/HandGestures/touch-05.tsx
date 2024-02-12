import * as React from "react";
import type { SVGProps } from "react";

interface Touch05IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Touch05Icon = (props: Touch05IconProps) => {
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
        <path d="M8.99011 22.0013L8.94275 21.2286L8.76846 20.4839C8.21637 18.2985 7.44427 18.0565 6.21598 16.4902C5.66145 15.7831 4.65999 14.8226 3.71263 13.4691C3.0814 12.5672 3.86739 10.4118 5.7877 11.0368C6.10735 11.1408 6.37606 11.3492 6.61429 11.5781L8.47736 13.4691C8.46211 10.9369 8.49736 4.95355 8.45623 3.37163C8.4151 1.7897 11.2845 1.28066 11.4537 3.44352V9.03763M11.4537 9.03763V9.97535M11.4537 9.03763C12.392 7.84817 14.1675 7.8063 14.4259 9.79758M14.4259 9.79758C14.4679 10.1218 14.4712 10.5005 14.4259 10.9377M14.4259 9.79758C14.9001 8.4064 17.0589 8.95015 17.4734 10.5693M17.4734 10.5693C17.5717 10.9531 17.4339 11.4548 17.4734 11.9676M17.4734 10.5693C17.7426 9.78896 20.7656 9.82922 20.4826 12.8439L20.4472 15.5487C20.4472 17.1539 20.2332 17.8981 19.6201 18.6872C19.3936 18.9786 19.0805 19.2701 18.8615 19.5896C18.6907 19.8389 18.5805 20.1289 18.5325 20.4273C18.4657 20.8429 18.4568 21.4182 18.4775 21.9692" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Touch05Icon;
