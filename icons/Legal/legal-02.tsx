import * as React from "react";
import type { SVGProps } from "react";

interface Legal02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Legal02Icon = (props: Legal02IconProps) => {
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
        <path d="M14.001 9.79808L4.39331 10.4919C3.10409 10.585 2.00097 9.6658 2.00098 8.49843C2.00099 7.33106 3.10414 6.41182 4.39336 6.50491L14.001 7.19857" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M21.0009 13.9983L13.001 13.9984M21.001 2.99841L13.0011 2.99848M20.0011 2.99842L14.0012 2.99847C14.0012 2.99847 13.5011 5.95999 13.5011 8.49844C13.5011 11.0369 14.001 13.9984 14.001 13.9984L20.0009 13.9983C20.0009 13.9983 20.501 11.0368 20.501 8.49838C20.501 5.95994 20.0011 2.99842 20.0011 2.99842Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.001 21.0017H21.9988M13.2257 21.0017C13.7772 20.0143 14.189 18.1245 16.1411 18.0187C16.7208 17.9873 17.3107 17.9873 17.8904 18.0187C19.8424 18.1245 20.2562 20.0143 20.8077 21.0017" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Legal02Icon;
