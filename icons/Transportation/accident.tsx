import * as React from "react";
import type { SVGProps } from "react";

interface AccidentIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AccidentIcon = (props: AccidentIconProps) => {
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
        <path d="M10.0079 10L7.4303 7.95293C7.13015 7.70142 6.98007 7.57566 7.01465 7.44575C7.04923 7.31585 7.24172 7.2823 7.62668 7.2152L8.79963 7.01076C9.24694 6.9328 9.30287 6.81797 9.10361 6.41057L7.86097 3.86983C7.61457 3.36602 7.49137 3.11411 7.6041 3.00758C7.71682 2.90105 7.95921 3.04033 8.44398 3.31888L10.5351 4.52048C10.8954 4.72749 10.9314 4.71655 11.117 4.34335L11.9611 2.64567C12.1808 2.20381 12.2907 1.98289 12.4373 2.00103C12.5839 2.01918 12.6372 2.26031 12.7437 2.74255L13.4246 5.8235C13.5138 6.22731 13.6177 6.28276 13.9978 6.11893L16.2665 5.14123C16.6616 4.97095 16.8592 4.88581 16.9592 4.98398C17.0593 5.08215 16.9794 5.28282 16.8198 5.68417L15.0047 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.4941 10L11.9941 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.74495 12.9995L2 12.9995M6.74495 12.9995C7.51333 13.5011 8.15661 13.5695 8.97523 13.9859C9.99046 14.5799 10.4726 15.4999 10.4682 16.9999C10.4682 17.9999 10.598 19.0199 10.2819 19.5699C9.91993 20.1999 7.69654 19.9979 7.49669 19.9979M6.74495 12.9995C5.72095 12.3311 5.15952 11.0867 4.5321 10.0799C3.6602 8.57991 2.46581 8.09991 2.01194 8.00391M7.49669 19.9979C7.49669 21.0999 6.6905 21.9999 5.49615 21.9999C4.40133 21.9999 3.50557 21.0999 3.50557 19.9979M7.49669 19.9979C7.49669 18.9499 6.6905 17.9999 5.49615 17.9999C4.40133 17.9999 3.50557 18.8999 3.50557 19.9979M3.50557 19.9979H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17.2555 12.997L22.0005 12.997M17.2555 12.997C16.4871 13.4987 15.8439 13.5672 15.0252 13.9837C14.01 14.5779 13.5279 15.4981 13.5322 16.9986C13.5322 17.9989 13.4025 19.0191 13.7185 19.5693C14.0805 20.1995 16.3039 19.9974 16.5038 19.9974M17.2555 12.997C18.2795 12.3284 18.8409 11.0837 19.4684 10.0766C20.3403 8.57616 21.5347 8.09603 21.9885 8M16.5038 19.9974C16.5038 21.0997 17.31 22 18.5043 22C19.5991 22 20.4949 21.0997 20.4949 19.9974M16.5038 19.9974C16.5038 18.9491 17.31 17.9989 18.5043 17.9989C19.5991 17.9989 20.4949 18.8991 20.4949 19.9974M20.4949 19.9974H22.0005" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default AccidentIcon;
