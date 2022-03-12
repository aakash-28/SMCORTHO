import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

import PickerField from './picker-field/PickerFileld';
import ColorUtils from '../../utils/color-utils';

const getContrast = (hexColor) => {
  if (!hexColor) {
    return null;
  }

  const [r, g, b] = ColorUtils.hexToRgb(hexColor);
  return ColorUtils.checkContrastColor(r, g, b);
};

const getColor = (hexColor) => ({
  color: hexColor,
  contrast: getContrast(hexColor)
});

const ColorPicker = ({ opened: pickerOpened, color, onColorChange }) => {
  const [opened, setOpened] = useState<boolean>(pickerOpened);

  const handleColorChange = color => onColorChange(getColor(color.hex));

  const handlePickerOpen = () => setOpened(true);

  const handleClose = () => setOpened(false);

  return (
    <>
      <PickerField savedColor={color} onOpenPicker={handlePickerOpen} />

      {opened && (
        <>
          <div className='picker-cover' onClick={handleClose} />
          <SketchPicker
            onChangeComplete={handleColorChange}
            color={color}
            presetColors={[]}
            disableAlpha
          />
        </>
      )}
    </>
  );
};

export default ColorPicker;
