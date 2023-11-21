import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

type Props = SvgProps & {
  svgWidth?: number;
  svgHeight?: number;
  color?: string;
};

function CloseX(props: Props) {
  return (
    <Svg
      width={props.svgWidth || 24}
      height={props.svgHeight || 24}
      viewBox="0 0 21 21"
      {...props}>
      <Path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.5 15.5l-10-10zm0-10l-10 10"
      />
    </Svg>
  );
}

export default CloseX;
