import * as React from "react";
import type { SVGProps } from "react";

interface AlmsIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AlmsIcon = (props: AlmsIconProps) => {
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
        <path d="M13.4659 4.02246C15.9701 4.02246 18 6.03463 18 8.51676C18 10.9989 15.9701 13.0111 13.4659 13.0111C11.2439 13.0111 9.39528 11.4269 9.00684 9.33581" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M21.9977 14.0098H19.6047C19.3107 14.0098 19.0208 14.076 18.7579 14.2031L16.7176 15.1899C16.4547 15.317 16.1648 15.3831 15.8708 15.3831H14.829C13.8214 15.3831 13.0045 16.1732 13.0045 17.1478C13.0045 17.1871 13.0315 17.2218 13.0706 17.2326L15.6096 17.9343C16.0651 18.0601 16.5528 18.0163 16.9765 17.8113L19.1577 16.7566M13.0045 16.5066L8.41518 15.0973C7.6016 14.8439 6.72215 15.1443 6.21251 15.8497C5.84403 16.3597 5.99406 17.0901 6.53091 17.3997L14.0408 21.7305C14.5184 22.0059 15.082 22.0731 15.6073 21.9173L21.9977 20.022" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.00195 4.51946C3.52934 3.92192 5.70251 2.46381 6.89042 2.16488C9.52307 1.63627 10.9042 2.41475 14.0218 4.02328C12.7097 4.05108 10.9458 4.8019 10.0777 6.51749M10.0777 6.51749H8.29356M10.0777 6.51749H11.3866C11.7803 6.54609 12.6286 6.78318 12.9555 7.54414C13.0867 7.84952 13.1241 8.21246 12.8665 8.39582C12.5192 8.7541 12.0207 8.74007 11.5785 8.81844M11.5785 8.81844C11.071 8.90838 10.5821 9.00828 10.071 9.1077M11.5785 8.81844L10.071 9.1077M10.071 9.1077C9.95817 9.12964 9.84428 9.15156 9.72886 9.17335M10.071 9.1077L9.72886 9.17335M9.72886 9.17335C8.93219 9.26231 6.99002 10.1914 6.04417 10.4516C5.72222 10.6054 3.14121 11.1057 2.01609 11.0179" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default AlmsIcon;
