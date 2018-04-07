import React from 'react';
import { G, Path } from 'react-native-svg';
import SvgIcon from 'react-native-svg-icon';
import { TouchableOpacity } from 'react-native';

const svgs = {
  bell: {
    svg: <G><Path d="m20.4 37.9q0-0.4-0.4-0.4-1.3 0-2.3-1t-0.9-2.2q0-0.4-0.4-0.4t-0.3 0.4q0 1.6 1.1 2.8t2.8 1.1q0.4 0 0.4-0.3z m18.2-6.5q0 1.2-0.9 2t-2 0.9h-10q0 2.4-1.7 4t-4 1.7-4-1.7-1.7-4h-10q-1.2 0-2-0.9t-0.9-2q1.1-0.9 2.1-1.9t1.9-2.7 1.6-3.5 1.1-4.6 0.5-5.8q0-3.4 2.6-6.3t6.8-3.6q-0.1-0.4-0.1-0.9 0-0.8 0.6-1.5t1.5-0.6 1.5 0.6 0.6 1.5q0 0.5-0.1 0.9 4.2 0.6 6.8 3.6t2.6 6.3q0 3.1 0.5 5.8t1.1 4.6 1.6 3.5 1.9 2.7 2.1 1.9z" /></G>,
    viewBox: '0 0 40 40',
  },
  user: {
    svg: <G><Path d="m35.9 31.4q0 2.6-1.6 4.2t-4.3 1.5h-19.5q-2.7 0-4.4-1.5t-1.6-4.2q0-1.2 0.1-2.3t0.3-2.5 0.6-2.4 0.9-2.2 1.4-1.8 1.9-1.2 2.5-0.4q0.2 0 1 0.5t1.6 1 2.4 1.1 3 0.5 3-0.5 2.4-1.1 1.7-1 0.9-0.5q1.4 0 2.5 0.4t1.9 1.2 1.4 1.8 0.9 2.2 0.6 2.4 0.4 2.5 0 2.3z m-7.1-20q0 3.6-2.5 6.1t-6.1 2.5-6-2.5-2.6-6.1 2.6-6 6-2.5 6.1 2.5 2.5 6z" /></G>,
    viewBox: '0 0 40 40',
  },
  home: {
    svg: <G><Path d="m32.9 22.1v10.8q0 0.5-0.4 1t-1 0.4h-8.6v-8.6h-5.7v8.6h-8.6q-0.5 0-1-0.4t-0.4-1v-10.8q0 0 0 0t0-0.1l12.9-10.6 12.8 10.6q0 0.1 0 0.1z m5-1.5l-1.4 1.7q-0.2 0.2-0.4 0.2h-0.1q-0.3 0-0.5-0.2l-15.4-12.8-15.5 12.8q-0.2 0.2-0.5 0.2-0.3 0-0.5-0.2l-1.4-1.7q-0.1-0.2-0.1-0.5t0.2-0.5l16.1-13.4q0.7-0.6 1.7-0.6t1.7 0.6l5.4 4.6v-4.4q0-0.3 0.2-0.5t0.5-0.2h4.3q0.3 0 0.5 0.2t0.2 0.5v9.1l4.9 4.1q0.2 0.2 0.3 0.5t-0.2 0.5z" /></G>,
    viewBox: '0 0 40 40',
  },
  search: {
    svg: <G><Path d="m27.2 18.6q0-4.2-2.9-7.1t-7.1-2.9-7 2.9-3 7.1 2.9 7 7.1 3 7.1-3 2.9-7z m11.4 18.5q0 1.2-0.8 2.1t-2 0.8q-1.2 0-2-0.8l-7.7-7.7q-4 2.8-8.9 2.8-3.2 0-6.1-1.3t-5-3.3-3.4-5-1.2-6.1 1.2-6.1 3.4-5.1 5-3.3 6.1-1.2 6.1 1.2 5 3.3 3.4 5.1 1.2 6.1q0 4.9-2.7 8.9l7.6 7.6q0.8 0.9 0.8 2z" /></G>,
    viewBox: '0 0 40 40',
  },
  refresh: {
    svg: <G><Path d="m36.7 23.6q0 0.1 0 0.1-1.4 6-6 9.7t-10.6 3.7q-3.3 0-6.4-1.2t-5.4-3.5l-2.9 2.9q-0.4 0.4-1 0.4t-1-0.4-0.4-1v-10q0-0.6 0.4-1t1-0.4h10q0.6 0 1 0.4t0.5 1-0.5 1l-3 3q1.6 1.5 3.6 2.3t4.1 0.8q3 0 5.6-1.4t4.2-4q0.2-0.4 1.2-2.6 0.1-0.5 0.6-0.5h4.3q0.3 0 0.5 0.2t0.2 0.5z m0.6-17.9v10q0 0.6-0.4 1t-1 0.4h-10q-0.6 0-1-0.4t-0.5-1 0.5-1l3-3.1q-3.3-3-7.8-3-2.9 0-5.5 1.4t-4.2 4q-0.2 0.4-1.2 2.6-0.2 0.5-0.6 0.5h-4.5q-0.3 0-0.5-0.2t-0.2-0.5v-0.1q1.5-6 6-9.7t10.7-3.7q3.3 0 6.4 1.2t5.4 3.5l3-2.9q0.4-0.4 1-0.4t1 0.4 0.4 1z" /></G>,
    viewBox: '0 0 40 40',
  }
}

const Icon = (props) => <SvgIcon {...props} svgs={svgs} />;

export const IconButton = (props) => (
  <TouchableOpacity onPress={props.onClicked}>
    <Icon {...props} />
  </TouchableOpacity>
);

export default Icon;