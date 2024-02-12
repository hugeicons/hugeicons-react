import * as React from "react";
import type { SVGProps } from "react";

interface HandBeaterIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const HandBeaterIcon = (props: HandBeaterIconProps) => {
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
        <path d="M6.41699 21.8261L2.1739 17.5852C1.91158 17.323 1.94759 16.8881 2.24947 16.6726C3.68235 15.6496 5.64516 15.812 6.89028 17.0565L6.94596 17.1121C8.19108 18.3566 8.35352 20.3184 7.33004 21.7506C7.11441 22.0523 6.67931 22.0883 6.41699 21.8261Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 17.002L11.002 13.002" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.498 9.50195H14.507" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.8631 5.6798C17.2916 3.92935 17.1251 2.68025 18.0622 2.01552C18.3557 1.88859 19.2716 2.46751 20.1767 3.28982C21.2027 4.22208 22.17 5.5026 21.9779 5.99625C21.3543 6.69228 20.0862 6.98316 18.7047 9.52814C16.9362 12.4935 14.4751 13.392 13.0604 13.9085L13.0243 13.9217C12.7108 14.0362 12.3553 14.0029 12.0997 13.7882C11.6727 13.4294 11.344 13.047 11.052 12.7635C9.99414 11.8 9.99414 11.5295 9.99414 11.2752C10.0554 10.246 12.1171 6.74921 13.8631 5.6798Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default HandBeaterIcon;
