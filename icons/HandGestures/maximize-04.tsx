import * as React from "react";
import type { SVGProps } from "react";

interface Maximize04IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Maximize04Icon = (props: Maximize04IconProps) => {
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
        <path d="M14.106 10.3188L14.9087 5.64798C15.0417 4.87408 14.5381 4.1361 13.7839 3.99964C13.0296 3.86317 12.3103 4.37992 12.1773 5.15382L10.5719 14.4955L10.4388 15.2196L8.64163 13.3092C7.9896 12.6327 6.91556 12.6944 6.33952 13.4415C5.89875 14.0131 5.88658 14.8216 6.30992 15.4073L9.06506 19.2186C9.69033 20.0836 10.003 20.5161 10.3792 20.8523C10.9532 21.365 11.641 21.7219 12.3808 21.8906C12.8657 22.0012 13.3868 22.0012 14.4289 22.0012H16.2461C18.6376 22.0012 20.6943 20.3055 21.1532 17.9554L21.8989 14.1368L21.9792 13.6697C22.1122 12.8957 21.6086 12.1578 20.8543 12.0213C20.1 11.8848 19.3808 12.4016 19.2478 13.1755L19.1675 13.6426M14.106 10.3188L13.8652 11.7201M14.106 10.3188C14.239 9.54494 14.9583 9.0282 15.7126 9.16466C16.4668 9.30112 16.9705 10.0391 16.8375 10.813L16.6769 11.7472M16.6769 11.7472L16.5966 12.2143M16.6769 11.7472C16.8099 10.9733 17.5292 10.4565 18.2834 10.593C19.0377 10.7294 19.5413 11.4674 19.4083 12.2413L19.3281 12.7084" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9.87479 4.61865C9.87479 4.61865 10.1205 2.39508 9.87479 2.15268M9.87479 2.15268C9.55602 1.8383 7.33416 2.10294 7.33416 2.10294M9.87479 2.15268L6.90237 5.09854M2.10872 7.35171C2.10872 7.35171 1.86301 9.57529 2.10872 9.81769M2.10872 9.81769C2.42748 10.1321 4.64934 9.86743 4.64934 9.86743M2.10872 9.81769L5.08113 6.87183" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Maximize04Icon;
