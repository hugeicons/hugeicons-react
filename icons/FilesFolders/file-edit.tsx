import * as React from "react";
import type { SVGProps } from "react";

interface FileEditIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FileEditIcon = (props: FileEditIconProps) => {
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
        <path d="M20.0544 10.9996V7.81719C20.0544 6.12367 20.0544 5.27691 19.7855 4.60062C19.3533 3.5134 18.4393 2.65581 17.2805 2.25029C16.5597 1.99805 15.6572 1.99805 13.8521 1.99805C10.6933 1.99805 9.11389 1.99805 7.85245 2.43947C5.82453 3.14912 4.22491 4.64991 3.46854 6.55255C2.99805 7.73606 2.99805 9.21789 2.99805 12.1816V14.7275C2.99805 17.7973 2.99805 19.3322 3.84856 20.3982C4.09224 20.7037 4.38124 20.9748 4.70676 21.2033C5.75513 21.9397 7.22909 21.9966 10.0213 22.001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 11.979C3 10.1381 4.58007 8.66472 6.42102 8.66472C7.08681 8.66472 7.87173 8.78138 8.51906 8.60793C9.09421 8.45381 9.54345 8.00457 9.69757 7.42941C9.87102 6.78209 9.75436 5.99717 9.75436 5.33138C9.75436 3.49043 11.2468 1.99805 13.0877 1.99805" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.8772 14.4829L20.5647 15.167C21.1465 15.7458 21.1465 16.6842 20.5647 17.263L16.9625 20.9145C16.6791 21.1964 16.3166 21.3865 15.9227 21.4597L13.6901 21.9419C13.3376 22.018 13.0237 21.7066 13.0992 21.3557L13.5744 19.1471C13.648 18.7551 13.839 18.3945 14.1224 18.1126L17.7705 14.4829C18.3523 13.9041 19.2954 13.9041 19.8772 14.4829Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FileEditIcon;
