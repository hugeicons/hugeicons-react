import * as React from "react";
import type { SVGProps } from "react";

interface DragLeft02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DragLeft02Icon = (props: DragLeft02IconProps) => {
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
        <path d="M8.50768 13.6528L10.4781 15.3722V6.50065C10.4781 5.67186 11.1513 5 11.9817 5C12.8116 5 13.4846 5.67107 13.4853 6.49935L13.4885 11.263L16.1301 11.6903C17.8352 11.9492 18.6878 12.0786 19.2883 12.4427C20.2802 13.0441 20.9988 14 20.9988 15.2657C20.9988 16.1841 20.7746 16.8002 20.2293 18.4556C19.8833 19.5059 19.7104 20.0311 19.4283 20.4469C18.9639 21.1313 18.2788 21.6311 17.4903 21.8605C17.0114 21.9999 16.4644 21.9999 15.3703 21.9999H14.443C12.9885 21.9999 12.2612 21.9999 11.6138 21.7298C11.4977 21.6814 11.3843 21.6267 11.2739 21.566C10.6585 21.2278 10.2 20.6566 9.28274 19.5142L6.31351 15.8158C5.85724 15.2474 5.85419 14.4341 6.3062 13.8622C6.84948 13.175 7.84737 13.08 8.50768 13.6528Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.9229 9.5C15.155 8.81764 15.9889 7.50601 15.9889 6C15.9889 3.79086 14.1945 2 11.981 2C9.76754 2 7.97314 3.79086 7.97314 6C7.97314 7.50601 8.80708 8.81764 10.0392 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7.81799 6.02265H3.00146M3.00146 6.02265C3.00146 6.49277 3.51571 6.71697 3.83751 7.01135L5.01766 8.00993M3.00146 6.02265C3.00146 5.55252 3.5238 5.29858 3.83751 5.00137L5.01766 3.98999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DragLeft02Icon;
