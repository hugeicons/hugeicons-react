import * as React from "react";
import type { SVGProps } from "react";

interface Move02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Move02Icon = (props: Move02IconProps) => {
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
        <path d="M4.8749 13.1576L7.01079 14.9889V5.22658C7.01079 4.25886 7.79502 3.47437 8.76243 3.47437C9.72982 3.47437 10.514 4.25886 10.514 5.22658V10.4832L13.5047 10.9614C15.4351 11.2511 16.4004 11.3959 17.0802 11.8033C18.2033 12.4763 19.0169 13.487 19.0169 14.9625C19.0169 15.9902 18.7629 16.6797 18.1456 18.5321C17.754 19.7076 17.5581 20.2952 17.2388 20.7605C16.713 21.5265 15.9373 22.0857 15.0446 22.3424C14.5024 22.4984 13.8832 22.4984 12.6445 22.4984H11.5946C9.9479 22.4984 9.12455 22.4984 8.39156 22.1961C8.26011 22.142 8.13164 22.0808 8.0067 22.0129C7.30998 21.6344 6.79078 20.9952 5.75239 19.7168L2.39075 15.578C1.87417 14.942 1.87073 14.0318 2.38247 13.3919C2.99756 12.6228 4.12733 12.5166 4.8749 13.1576Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.9186 2.36794L17.724 1.61042C17.8006 1.53838 17.8985 1.50205 17.9966 1.50159M19.1058 2.36794L18.268 1.60587C18.191 1.53584 18.0937 1.50114 17.9966 1.50159M19.1058 8.61085L18.3004 9.36837C18.2157 9.44805 18.1049 9.48405 17.9966 9.47613M16.9186 8.61085L17.7564 9.37292C17.8251 9.43544 17.9101 9.4698 17.9966 9.47613M17.9966 1.50159V9.47613M21.1332 4.39507L21.8902 5.20096C21.9622 5.27759 21.9985 5.37558 21.999 5.47377M21.1332 6.58373L21.8948 5.74538C21.9648 5.66835 21.9994 5.57096 21.999 5.47377M14.8946 6.58371L14.1376 5.77782C14.0579 5.69306 14.022 5.58216 14.0299 5.47377M14.8946 4.39505L14.133 5.2334C14.0705 5.30218 14.0362 5.38717 14.0299 5.47377M21.999 5.47377L14.0299 5.47377" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Move02Icon;
