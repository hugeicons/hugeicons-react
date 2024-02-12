import * as React from "react";
import type { SVGProps } from "react";

interface StructureFailIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const StructureFailIcon = (props: StructureFailIconProps) => {
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
        <path d="M15.0151 5C15.0151 3.58579 15.0151 2.87868 15.5267 2.43934C16.0383 2 16.8617 2 18.5084 2C20.1551 2 20.9785 2 21.49 2.43934C22.0016 2.87868 22.0016 3.58579 22.0016 5C22.0016 6.41421 22.0016 7.12132 21.49 7.56066C20.9785 8 20.1551 8 18.5084 8C16.8617 8 16.0383 8 15.5267 7.56066C15.0151 7.12132 15.0151 6.41421 15.0151 5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15.0151 19C15.0151 17.5858 15.0151 16.8787 15.5267 16.4393C16.0383 16 16.8617 16 18.5084 16C20.1551 16 20.9785 16 21.49 16.4393C22.0016 16.8787 22.0016 17.5858 22.0016 19C22.0016 20.4142 22.0016 21.1213 21.49 21.5607C20.9785 22 20.1551 22 18.5084 22C16.8617 22 16.0383 22 15.5267 21.5607C15.0151 21.1213 15.0151 20.4142 15.0151 19Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8.54111 10.4822L5.52328 13.4945M8.54111 13.4945L5.52328 10.4821" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.04524 17.0318C9.81002 17.0318 12.0102 14.7714 12.0102 11.9936C12.0102 9.21583 9.76889 6.96399 7.00412 6.96399M7.04524 17.0318C4.28047 17.0318 1.99805 14.7714 1.99805 11.9936C1.99805 9.21583 4.23934 6.96399 7.00412 6.96399M7.04524 17.0318C6.9756 19.1617 8.53173 19.9392 9.63979 19.98H12.0102M7.00412 6.96399C6.93377 4.80392 8.51699 4.04432 9.63979 3.99658H12.0209" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default StructureFailIcon;
