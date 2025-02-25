import { hover } from './hover';

const testHoverStyle = {
  backgroundColor: 'red',
};

const testReturnStyle = {
  backgroundColor: 'blue',
  '@media (pointer: fine)': {
    '&:hover': testHoverStyle,
  },
  '@media (pointer: coarse)': {
    '&:active': testHoverStyle,
  },
};

describe('@mantine/core/utils/apply-hover-style', () => {
  it('return style with hover and active effect', () => {
    expect({
      backgroundColor: 'blue',
      ...hover(testHoverStyle),
    }).toStrictEqual(testReturnStyle);
  });
});
