import * as React from "react";
import type { SVGProps } from "react";

interface FolderFavouriteIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FolderFavouriteIcon = (props: FolderFavouriteIconProps) => {
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
        <path d="M7 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C21.9146 8.46215 21.9856 9.46861 21.9976 11M12 6.5L11.3666 5.23313C10.8418 4.18358 10.3622 3.12712 9.19926 2.69101C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88032C3.05227 3.15142 2.65142 3.55227 2.38032 4.03806C2 4.71956 2 5.6278 2 7.44427V10.5C2 15.214 2 17.5711 3.46447 19.0355C4.7646 20.3357 6.7682 20.4816 10.5 20.4979" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.1418 13.9416C15.3486 13.2105 16.4018 13.5051 17.0345 13.9744C17.294 14.1668 17.4237 14.263 17.5 14.263C17.5763 14.263 17.706 14.1668 17.9655 13.9744C18.5982 13.5051 19.6514 13.2105 20.8582 13.9416C22.4419 14.901 22.8002 18.0663 19.1472 20.7368C18.4514 21.2454 18.1035 21.4997 17.5 21.4997C16.8965 21.4997 16.5486 21.2454 15.8528 20.7368C12.1998 18.0663 12.5581 14.901 14.1418 13.9416Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default FolderFavouriteIcon;
