import * as React from "react";
import type { SVGProps } from "react";

interface FolderShared01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FolderShared01Icon = (props: FolderShared01IconProps) => {
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
        <path d="M7 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C21.935 8.49268 21.9916 8.96506 21.9989 10.5M12 6.5L11.3666 5.23313C10.8418 4.18358 10.3622 3.12712 9.19926 2.69101C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88032C3.05227 3.15142 2.65142 3.55227 2.38032 4.03806C2 4.71956 2 5.6278 2 7.44427V10.5C2 15.214 2 17.5711 3.46447 19.0355C4.8215 20.3926 6.44493 20.4927 10.5 20.5H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15.59 18.9737C14.9612 19.3002 13.3126 19.9669 14.3167 20.8011C14.8072 21.2086 15.3536 21.5 16.0404 21.5H19.9596C20.6464 21.5 21.1928 21.2086 21.6833 20.8011C22.6874 19.9669 21.0388 19.3002 20.41 18.9737C18.9355 18.2081 17.0645 18.2081 15.59 18.9737Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M20 14.4378C20 15.508 19.1046 16.3756 18 16.3756C16.8954 16.3756 16 15.508 16 14.4378C16 13.3676 16.8954 12.5 18 12.5C19.1046 12.5 20 13.3676 20 14.4378Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </>
  );
};

export default FolderShared01Icon;
