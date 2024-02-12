import * as React from "react";
import type { SVGProps } from "react";

interface FolderLockedIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FolderLockedIcon = (props: FolderLockedIconProps) => {
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
        <path d="M12.0027 20.5C7.2874 20.5 4.92973 20.5 3.46487 19.0355C2 17.5711 2 15.214 2 10.5V7.44427C2 5.6278 2 4.71956 2.38042 4.03806C2.6516 3.55227 3.05255 3.15142 3.53848 2.88032C4.22017 2.5 5.12865 2.5 6.94562 2.5C8.10969 2.5 8.69172 2.5 9.20122 2.69101C10.3645 3.12712 10.8442 4.18358 11.3691 5.23313L12.0027 6.5M7.00136 6.5H16.754C18.8613 6.5 19.9149 6.5 20.6718 7.00559C20.9995 7.22447 21.2808 7.50572 21.4997 7.83329C21.8937 8.42282 21.9808 9.19244 22 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16.7372 15.6755L16.7372 14.2848C16.7372 14.0794 16.7458 13.8714 16.8194 13.6796C17.0153 13.1689 17.5343 12.5 18.4791 12.5C19.424 12.5 19.9633 13.1689 20.1593 13.6796C20.2329 13.8714 20.2414 14.0794 20.2414 14.2848L20.2414 15.6755M16.8067 21.5H20.1923C21.1891 21.5 21.9971 20.6932 21.9971 19.6979V17.6961C21.9971 16.7008 21.1891 15.894 20.1923 15.894H16.8067C15.81 15.894 15.002 16.7008 15.002 17.6961V19.6979C15.002 20.6932 15.81 21.5 16.8067 21.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FolderLockedIcon;
