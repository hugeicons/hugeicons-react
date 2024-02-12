import * as React from "react";
import type { SVGProps } from "react";

interface DragRight02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DragRight02Icon = (props: DragRight02IconProps) => {
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
        <path d="M7.03345 13.6528L9 15.3722V6.50065C9 5.67186 9.67186 5 10.5006 5C11.3289 5 12.0006 5.67107 12.0013 6.49935L12.0045 11.263L14.6409 11.6903C16.3426 11.9492 17.1935 12.0786 17.7928 12.4427C18.7828 13.0441 19.5 14 19.5 15.2657C19.5 16.1841 19.2762 16.8002 18.732 18.4556C18.3867 19.5059 18.2141 20.0311 17.9326 20.4469C17.4691 21.1313 16.7853 21.6311 15.9984 21.8605C15.5204 21.9999 14.9745 21.9999 13.8826 21.9999H12.9571C11.5054 21.9999 10.7796 21.9999 10.1335 21.7298C10.0176 21.6814 9.90436 21.6267 9.79422 21.566C9.18004 21.2278 8.72235 20.6566 7.80698 19.5142L4.8436 15.8158C4.38822 15.2474 4.38518 14.4341 4.8363 13.8622C5.37851 13.175 6.37444 13.08 7.03345 13.6528Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.438 9.5C13.6677 8.81764 14.5 7.50601 14.5 6C14.5 3.79086 12.7091 2 10.5 2C8.29086 2 6.5 3.79086 6.5 6C6.5 7.50601 7.33229 8.81764 8.562 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17.5166 3.99561L19.26 5.43632C19.5151 5.70828 19.5577 5.91336 19.4319 6.21471C19.3863 6.32386 19.3089 6.41604 19.2204 6.49449L17.5166 8.00446M14.5967 5.98052H18.3333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DragRight02Icon;
