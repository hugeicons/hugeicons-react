import * as React from "react";
import type { SVGProps } from "react";

interface FolderEditIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FolderEditIcon = (props: FolderEditIconProps) => {
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
        <path d="M7.00098 6.5H16.751C18.8577 6.5 19.911 6.5 20.6677 7.00559C20.9953 7.22447 21.2765 7.50572 21.4954 7.83329C21.9371 8.4943 21.9929 9.38174 22 11M12.001 6.5L11.3676 5.23313C10.8428 4.18358 10.3632 3.12712 9.20024 2.69101C8.69088 2.5 8.109 2.5 6.94525 2.5C5.12878 2.5 4.22054 2.5 3.53904 2.88032C3.05325 3.15142 2.6524 3.55227 2.3813 4.03806C2.00098 4.71956 2.00098 5.6278 2.00098 7.44427V10.5C2.00098 15.214 2.00098 17.5711 3.46545 19.0355C4.76558 20.3357 6.76918 20.4816 10.501 20.4979H11.001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20.8615 13.9393L21.5557 14.6317C22.1432 15.2175 22.1432 16.1672 21.5557 16.753L17.9183 20.4487C17.6321 20.734 17.2661 20.9264 16.8683 21.0005L14.6139 21.4885C14.258 21.5656 13.941 21.2504 14.0173 20.8952L14.4972 18.6599C14.5714 18.2632 14.7643 17.8982 15.0505 17.6129L18.7342 13.9393C19.3217 13.3536 20.274 13.3536 20.8615 13.9393Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FolderEditIcon;
