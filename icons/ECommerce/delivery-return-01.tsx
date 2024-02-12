import * as React from "react";
import type { SVGProps } from "react";

interface DeliveryReturn01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DeliveryReturn01Icon = (props: DeliveryReturn01IconProps) => {
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
        <path d="M15.5269 15.9773H18.7662C20.0454 15.9557 21.9996 16.629 21.9996 19.0572C21.9996 21.5767 19.5881 21.9991 18.7662 21.9991C17.9443 21.9991 10.1825 21.9991 7.94527 21.9991C5.43927 21.9991 2.00096 21.4915 2.00098 17.1682L2.00098 8.00293H21.9996V12.5199M15.5269 15.9773C15.5323 15.7634 15.6233 15.5513 15.8001 15.3972L17.5019 13.9769M15.5269 15.9773C15.5212 16.2055 15.613 16.4358 15.8023 16.5997L17.5019 17.9833" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.00586 7.9912L2.92739 5.69028C3.67517 3.90211 4.04906 3.00803 4.80692 2.50463C5.56477 2.00122 6.53689 2.00122 8.48112 2.00122H15.5004C17.4447 2.00122 18.4167 2.00122 19.1746 2.50463C19.9325 3.00803 20.3063 3.90211 21.0542 5.69028L22 7.99476" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11.9629 8.00122V2.00122" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9.96289 12.0012H13.9629" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default DeliveryReturn01Icon;
