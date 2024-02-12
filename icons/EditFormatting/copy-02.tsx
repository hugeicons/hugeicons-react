import * as React from "react";
import type { SVGProps } from "react";

interface Copy02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Copy02Icon = (props: Copy02IconProps) => {
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
        <path d="M16.9637 8.98209C16.9613 6.03194 16.9167 4.50384 16.0579 3.45753C15.8921 3.25546 15.7068 3.07019 15.5047 2.90436C14.4009 1.99854 12.7609 1.99854 9.48093 1.99854C6.20095 1.99854 4.56096 1.99854 3.45714 2.90436C3.25506 3.07018 3.06978 3.25546 2.90393 3.45753C1.99805 4.56128 1.99805 6.20116 1.99805 9.48091C1.99805 12.7607 1.99805 14.4005 2.90393 15.5043C3.06977 15.7063 3.25506 15.8916 3.45714 16.0574C4.50353 16.9162 6.03173 16.9608 8.98207 16.9632" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.0283 9.02455L16.994 8.98193M14.0143 22.0013L16.98 21.9586M21.9716 14.0221L21.9437 16.9818M9.01039 14.0357L8.98242 16.9953M11.4873 9.02455C10.6546 9.17371 9.31788 9.32713 9.01039 11.0488M19.4947 21.9586C20.3297 21.8223 21.6686 21.6894 22.0025 19.9726M19.4947 9.02455C20.3275 9.17371 21.6642 9.32713 21.9716 11.0488M11.5001 21.9573C10.6672 21.8086 9.33045 21.6559 9.02203 19.9344" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Copy02Icon;
