import * as React from "react";
import type { SVGProps } from "react";

interface FolderUnlockedIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FolderUnlockedIcon = (props: FolderUnlockedIconProps) => {
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
        <path d="M12.0088 20.5C7.29058 20.5 4.9315 20.5 3.46575 19.0355C2 17.5711 2 15.214 2 10.5V7.44427C2 5.6278 2 4.71956 2.38065 4.03806C2.65199 3.55227 3.05319 3.15142 3.53941 2.88032C4.22151 2.5 5.13054 2.5 6.9486 2.5C8.11337 2.5 8.69575 2.5 9.20556 2.69101C10.3695 3.12712 10.8495 4.18358 11.3748 5.23313L12.0088 6.5M7.00438 6.5H16.7629C18.8714 6.5 19.9257 6.5 20.6831 7.00559C21.0109 7.22447 21.2924 7.50572 21.5115 7.83329C21.8526 8.34341 21.9638 8.98836 22 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16.5312 15.86V14.4523C16.5312 13.3741 17.4127 12.5 18.5 12.5C18.9887 12.5 19.4359 12.6766 19.7801 12.969M17.8437 21.5H19.1563C20.1777 21.5 20.6884 21.5 21.0749 21.2951C21.3802 21.1333 21.6302 20.8854 21.7934 20.5827C22 20.1993 22 19.6929 22 18.68C22 17.6671 22 17.1607 21.7934 16.7773C21.6302 16.4746 21.3802 16.2267 21.0749 16.0649C20.6884 15.86 20.1777 15.86 19.1563 15.86H17.8437C16.8223 15.86 16.3116 15.86 15.9251 16.0649C15.6198 16.2267 15.3698 16.4746 15.2066 16.7773C15 17.1607 15 17.6671 15 18.68C15 19.6929 15 20.1993 15.2066 20.5827C15.3698 20.8854 15.6198 21.1333 15.9251 21.2951C16.3116 21.5 16.8223 21.5 17.8437 21.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default FolderUnlockedIcon;
