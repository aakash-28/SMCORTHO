import React from 'react';
import ColorCircle from './Circle';

import ColorUtils from '../../../utils/color-utils';
import './PickerField.scss';

const getContrast = (hexColor) => {
  const [r, g, b] = ColorUtils.hexToRgb(hexColor);
  return ColorUtils.checkContrastColor(r, g, b);
};

const PickerField = ({ savedColor, onOpenPicker }) => {
  const handleOpenPicker = () => onOpenPicker(savedColor);

  return (
    <div className='color-field'>
      <ColorCircle
        color={savedColor}
        onClick={handleOpenPicker}
        contrastColor={getContrast(savedColor)}
      />

      <div className='selected-color-value'>{savedColor}</div>
    </div>
  );
};

export default PickerField;
