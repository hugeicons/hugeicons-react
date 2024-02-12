import * as React from "react";
import type { SVGProps } from "react";

interface LegalDocument02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LegalDocument02Icon = (props: LegalDocument02IconProps) => {
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
        <path d="M3 14V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 18H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7.04941 6.97681H16.9569M12.0148 6.97681V13.9829M12.0148 13.9829H11.4817M12.0148 13.9829H12.5414M8.01555 7.96486C7.29005 8.71059 6.08766 9.99655 6.61359 11.0679C7.08068 12.0193 7.74498 12.0361 8.01512 12.0361C8.28525 12.0361 8.98805 12.0193 9.45514 11.0679C9.98108 9.99655 8.74104 8.71059 8.01555 7.96486ZM15.9824 7.96486C15.2569 8.71059 14.0545 9.99655 14.5804 11.0679C15.0475 12.0193 15.7118 12.0361 15.9819 12.0361C16.2521 12.0361 16.9549 12.0193 17.422 11.0679C17.9479 9.99655 16.7079 8.71059 15.9824 7.96486Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default LegalDocument02Icon;
