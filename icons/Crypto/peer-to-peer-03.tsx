import * as React from "react";
import type { SVGProps } from "react";

interface PeerToPeer03IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PeerToPeer03Icon = (props: PeerToPeer03IconProps) => {
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
        <path d="M5.5166 3C4.68817 3 4.0166 3.67157 4.0166 4.5C4.0166 5.32843 4.68817 6 5.5166 6C6.34503 6 7.0166 5.32843 7.0166 4.5C7.0166 3.67157 6.34503 3 5.5166 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.5166 3C17.6882 3 17.0166 3.67157 17.0166 4.5C17.0166 5.32843 17.6882 6 18.5166 6C19.345 6 20.0166 5.32843 20.0166 4.5C20.0166 3.67157 19.345 3 18.5166 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.0166 6H10.5166" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13.5166 6H14.0166" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20.5166 14V17C20.5166 17.4647 20.5166 17.697 20.4782 17.8902C20.3204 18.6836 19.7002 19.3038 18.9068 19.4616C18.7136 19.5 18.4813 19.5 18.0166 19.5M3.5166 14V17C3.5166 17.4647 3.5166 17.697 3.55503 17.8902C3.71284 18.6836 4.33304 19.3038 5.12642 19.4616C5.31962 19.5 5.55194 19.5 6.0166 19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.5166 17.0022C10.6668 17 10.8327 17 11.0166 17H13.0166C13.2005 17 13.3664 17 13.5166 17.0022M10.5166 17.0022C9.89671 17.0111 9.54526 17.0571 9.30949 17.2929C9.0166 17.5858 9.0166 18.0572 9.0166 19C9.0166 19.9428 9.0166 20.4142 9.30949 20.7071C9.60239 21 10.0738 21 11.0166 21H13.0166C13.9594 21 14.4308 21 14.7237 20.7071C15.0166 20.4142 15.0166 19.9428 15.0166 19C15.0166 18.0572 15.0166 17.5858 14.7237 17.2929C14.4879 17.0571 14.1365 17.0111 13.5166 17.0022M10.5166 17.0022V15.5C10.5166 14.6716 11.1882 14 12.0166 14C12.845 14 13.5166 14.6716 13.5166 15.5V17.0022" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5.49849 11.5054H3.7284C3.52283 11.5054 3.31638 11.475 3.12757 11.3899C2.51293 11.1129 2.20109 10.747 2.05576 10.5182C1.97307 10.388 1.98484 10.2221 2.07456 10.0971C2.78667 9.10478 4.43774 8.50542 5.49849 8.50537M5.50151 11.5054H7.2716C7.47717 11.5054 7.68362 11.475 7.87243 11.3899C8.48707 11.1129 8.79891 10.747 8.94424 10.5182C9.02693 10.388 9.01515 10.2221 8.92544 10.0971C8.21333 9.10478 6.56226 8.50542 5.50151 8.50537" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.4985 11.5054H16.7284C16.5228 11.5054 16.3164 11.475 16.1276 11.3899C15.5129 11.1129 15.2011 10.747 15.0558 10.5182C14.9731 10.388 14.9848 10.2221 15.0746 10.0971C15.7867 9.10478 17.4377 8.50542 18.4985 8.50537M18.5015 11.5054H20.2716C20.4772 11.5054 20.6836 11.475 20.8724 11.3899C21.4871 11.1129 21.7989 10.747 21.9442 10.5182C22.0269 10.388 22.0152 10.2221 21.9254 10.0971C21.2133 9.10478 19.5623 8.50542 18.5015 8.50537" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default PeerToPeer03Icon;
