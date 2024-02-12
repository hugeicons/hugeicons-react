import * as React from "react";
import type { SVGProps } from "react";

interface QuestionIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const QuestionIcon = (props: QuestionIconProps) => {
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
        <path d="M22 7.28336C22 9.92493 19.7611 12.0667 17 12.0667C16.6753 12.0671 16.3516 12.0371 16.0327 11.9772C15.8031 11.9341 15.6883 11.9126 15.6082 11.9248C15.5281 11.937 15.4145 11.9974 15.1874 12.1182C14.545 12.4598 13.7959 12.5805 13.0755 12.4465C13.3493 12.1097 13.5363 11.7056 13.6188 11.2724C13.6688 11.0074 13.545 10.75 13.3594 10.5616C12.5166 9.70577 12 8.55254 12 7.28336C12 4.64178 14.2388 2.5 17 2.5C19.7611 2.5 22 4.64178 22 7.28336Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M15.4922 7.5H15.5003M18.4922 7.5H18.5003" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7.50189 21.5H4.71817C4.39488 21.5 4.07021 21.4545 3.77327 21.3269C2.80666 20.9116 2.31624 20.3632 2.08769 20.0202C1.95764 19.825 1.97617 19.5763 2.11726 19.3889C3.23716 17.9015 5.83846 17.003 7.50665 17.0029C9.17484 17.003 11.7714 17.9015 12.8913 19.3889C13.0324 19.5763 13.0509 19.825 12.9209 20.0202C12.6923 20.3632 12.2019 20.9116 11.2353 21.3269C10.9383 21.4545 10.6137 21.5 10.2904 21.5H7.50189Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.2855 11.7888C10.2855 13.3201 9.04142 14.5614 7.50676 14.5614C5.97211 14.5614 4.72803 13.3201 4.72803 11.7888C4.72803 10.2575 5.97211 9.01611 7.50676 9.01611C9.04142 9.01611 10.2855 10.2575 10.2855 11.7888Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default QuestionIcon;
