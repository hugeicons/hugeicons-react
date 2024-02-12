import * as React from "react";
import type { SVGProps } from "react";

interface Cash02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Cash02Icon = (props: Cash02IconProps) => {
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
        <path d="M12 18C10.6675 18.6224 8.91707 19 7 19C5.93408 19 4.91969 18.8833 4 18.6726C3.4088 18.5372 3.11319 18.4695 2.75898 18.1892C2.55696 18.0294 2.30483 17.7129 2.19412 17.4803C2 17.0725 2 16.677 2 15.886V5.11397C2 4.12914 3.04003 3.45273 4 3.6726C4.91969 3.88325 5.93408 4 7 4C8.91707 4 10.6675 3.62236 12 3C13.3325 2.37764 15.0829 2 17 2C18.0659 2 19.0803 2.11675 20 2.3274C20.5912 2.46281 20.8868 2.53051 21.241 2.81079C21.443 2.97064 21.6952 3.28705 21.8059 3.51966C22 3.92751 22 4.32299 22 5.11397V15.886C22 16.8709 20.96 17.5473 20 17.3274C19.0803 17.1167 18.0659 17 17 17C15.0829 17 13.3325 17.3776 12 18Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2 21C3.33254 21.6224 5.08293 22 7 22C8.91707 22 10.6675 21.6224 12 21C13.3325 20.3776 15.0829 20 17 20C18.9171 20 20.6675 20.3776 22 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.5 10.5C14.5 11.8807 13.3807 13 12 13C10.6193 13 9.5 11.8807 9.5 10.5C9.5 9.11929 10.6193 8 12 8C13.3807 8 14.5 9.11929 14.5 10.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5.5 11.5L5.5 11.509" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.5 9.49219L18.5 9.50117" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Cash02Icon;
