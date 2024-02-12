import * as React from "react";
import type { SVGProps } from "react";

interface MessageFavourite02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MessageFavourite02Icon = (props: MessageFavourite02IconProps) => {
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
        <path d="M21.9598 10.9709C21.9711 11.1462 21.98 11.3228 21.9866 11.5002C22.011 12.1628 22.0021 12.8361 21.9598 13.491C21.6856 17.7334 18.3536 21.1126 14.1706 21.3907C12.7435 21.4855 11.2536 21.4854 9.8294 21.3907C9.33896 21.3581 8.8044 21.2411 8.34401 21.0514C7.83177 20.8405 7.5756 20.735 7.44544 20.751C7.31527 20.767 7.1264 20.9062 6.74868 21.1848C6.08268 21.6759 5.24367 22.0286 3.99943 21.9983C3.37026 21.983 3.05568 21.9754 2.91484 21.7353C2.77401 21.4951 2.94941 21.1627 3.30021 20.498C3.78674 19.576 4.09501 18.5205 3.62791 17.6748C2.82343 16.4668 2.1401 15.0361 2.04024 13.491C1.98659 12.6608 1.98659 11.8011 2.04024 10.9709C2.31441 6.72853 5.64639 3.34929 9.8294 3.07123C10.3789 3.0347 10.4383 3.01227 11 3.00391" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.9953 12.5H12.0042M15.9908 12.5H15.9998M7.99976 12.5H8.00873" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.015 2.38661C16.0876 1.74692 17.0238 2.00471 17.5863 2.41534C17.8169 2.58371 17.9322 2.66789 18 2.66789C18.0678 2.66789 18.1831 2.58371 18.4137 2.41534C18.9762 2.00471 19.9124 1.74692 20.985 2.38661C22.3928 3.22614 22.7113 5.99577 19.4642 8.33241C18.8457 8.77747 18.5365 9 18 9C17.4635 9 17.1543 8.77747 16.5358 8.33241C13.2887 5.99577 13.6072 3.22614 15.015 2.38661Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default MessageFavourite02Icon;
