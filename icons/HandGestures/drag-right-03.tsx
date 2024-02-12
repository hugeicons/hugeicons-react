import * as React from "react";
import type { SVGProps } from "react";

interface DragRight03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DragRight03Icon = (props: DragRight03IconProps) => {
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
        <path d="M11.2957 9.72218H12.235C13.2726 9.72218 14.1138 10.5679 14.1138 11.6111M14.1138 11.6111V12.5555M14.1138 11.6111C14.1138 11.0895 14.5343 10.6666 15.0531 10.6666C16.0907 10.6666 16.9319 11.5123 16.9319 12.5555M16.9319 12.5555V13.4999M16.9319 12.5555C16.9319 12.0611 17.3734 11.685 17.8585 11.7663L18.1801 11.8202C19.086 11.972 19.75 12.76 19.75 13.6834L19.7496 14.1297C19.7496 16.1823 19.7496 17.2086 19.4386 18.0257C19.2582 18.4996 18.7823 19.1041 18.4018 19.5409C18.0726 19.9187 17.8709 20.3979 17.8709 20.9001V22M11.2955 11.6111V6.41665C11.2955 5.63426 10.6646 5 9.8864 5C9.1082 5 8.47736 5.63426 8.47736 6.41665L8.47717 13.9367L6.9551 12.4016C6.28728 11.728 5.18723 11.7895 4.59724 12.5333C4.1458 13.1024 4.13333 13.9075 4.56692 14.4906L7.94837 18.8333C8.59533 19.6641 8.9469 20.9448 8.9469 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.688 9.5C12.9177 8.81764 13.75 7.50601 13.75 6C13.75 3.79086 11.9591 2 9.75 2C7.54086 2 5.75 3.79086 5.75 6C5.75 7.50601 6.58229 8.81764 7.812 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16.7182 3.99561L18.4617 5.43632C18.7168 5.70828 18.7594 5.91336 18.6336 6.21471C18.588 6.32386 18.5106 6.41604 18.4221 6.49449L16.7182 8.00446M13.7983 5.98052H17.535" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DragRight03Icon;
