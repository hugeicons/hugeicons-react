import * as React from "react";
import type { SVGProps } from "react";

interface HandGripIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const HandGripIcon = (props: HandGripIconProps) => {
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
        <path d="M2.34202 19.8156C4.06046 18.5763 4.98568 15.6198 5.46033 13.3476C5.59796 12.6888 5.65657 11.3535 6.41344 11.05C6.84617 10.8764 7.41388 11.1662 8.54928 11.7457C9.42184 12.1911 9.85812 12.4138 9.97081 12.8837C10.241 14.0101 8.41903 14.4446 8.85196 15.5942C9.33523 16.8775 9.00703 17.2525 8.06809 18.0939C7.35002 18.7374 8.28381 19.5511 7.86818 20.2587C6.83358 22.0202 5.19892 22.5446 3.03612 21.3715C2.46312 21.0606 1.4744 20.4413 2.34202 19.8156Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M21.658 19.8156C19.9396 18.5763 19.0144 15.6198 18.5397 13.3476C18.4021 12.6888 18.3435 11.3535 17.5866 11.05C17.1539 10.8764 16.5862 11.1662 15.4507 11.7457C14.5782 12.1911 14.1419 12.4138 14.0292 12.8837C13.7602 14.0051 15.5772 14.4546 15.1481 15.5942C14.6648 16.8775 14.993 17.2525 15.9319 18.0939C16.65 18.7374 15.7162 19.5511 16.1319 20.2587C17.1665 22.0202 18.8011 22.5446 20.9639 21.3715C21.5369 21.0606 22.5256 20.4413 21.658 19.8156Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M14.4999 4.5C14.4999 5.88071 13.3806 7 11.9999 7C10.6192 7 9.49993 5.88071 9.49993 4.5C9.49993 3.11929 10.6192 2 11.9999 2C13.3806 2 14.4999 3.11929 14.4999 4.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8.49993 11.5L9.24993 8.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14.0375 6.21204L15.5489 11.6402" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default HandGripIcon;
