import * as React from "react";
import type { SVGProps } from "react";

interface ChairBarberIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const ChairBarberIcon = (props: ChairBarberIconProps) => {
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
        <path d="M15.6972 15H8C6.89543 15 6 14.0951 6 12.9788C6 11.8625 6.89796 10.9517 8.00141 11.002C12.6902 11.2157 15.2951 12.1485 16.384 12.6526C16.78 12.836 17 13.2432 17 13.6834C17 14.4105 16.4167 15 15.6972 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 14L20.9401 3.48443C21.1497 2.90943 20.7906 2.29091 20.1533 2.12892C18.5192 1.71359 16.8081 2.31124 16.2695 3.78511C15.6441 5.49648 15 8.13095 15 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 7.96062C15 7.96062 11.6187 6.56595 10.3204 7.13969C9.93065 7.31192 9.59819 7.59725 9.36369 7.96076C9 8.52452 9 9.34967 9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 13V16C6 16.9319 6 17.3978 5.84776 17.7654C5.64477 18.2554 5.25542 18.6448 4.76537 18.8478C4.39782 19 3.93188 19 3 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 15V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 21H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default ChairBarberIcon;
