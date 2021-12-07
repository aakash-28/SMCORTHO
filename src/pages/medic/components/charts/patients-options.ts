

const pieStyle = {
  normal: {
    opacity: 0.7,
    borderWidth: 3,
    borderColor: '#336cfb'
  }
};

const patientsAgeOptions = {
  grid: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b}<br>{c} ({d}%)'
  },
  series: [
    {
      name: 'pie',
      type: 'pie',
      selectedMode: 'single',
      selectedOffset: 30,
      clockwise: true,
      radius: [60, '90%'],
      label: {
        normal: {
          position: 'inner',
          textStyle: {
            fontSize: 14,
            fontWeight: 700,
            color: '#000'
          }
        }
      },
      labelLine: {
        normal: {
          lineStyle: {
            color: '#336cfb'
          }
        }
      },
      data: [
        { value: 347, name: '0-10' },
        { value: 310, name: '10-20' },
        { value: 234, name: '20-30' },
        { value: 195, name: '30-40' },
        { value: 670, name: '40+' }
      ],
      itemStyle: pieStyle
    }
  ]
};

const patientsGenderOptions = {
  grid: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b}<br>{c} ({d}%)'
  },
  series: [
    {
      name: 'pie',
      type: 'pie',
      selectedMode: 'single',
      selectedOffset: 30,
      clockwise: true,
      radius: [0, '90%'],
      label: {
        normal: {
          position: 'inner',
          textStyle: {
            fontSize: 14,
            fontWeight: 700,
            color: '#000'
          }
        }
      },
      labelLine: {
        normal: {
          lineStyle: {
            color: '#336cfb'
          }
        }
      },
      data: [
        { value: 154, name: 'Female' },
        { value: 173, name: 'Male' }
      ],
      itemStyle: pieStyle
    }
  ]
};

const LocalityOptions = {
  grid: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b}<br>{c} ({d}%)'
  },
  series: [
    {
      name: 'pie',
      type: 'pie',
      radius: [0, '90%'],
      roseType: 'area',
      label: {
        normal: {
          show: false
        }
      },
      data: [
        { value: 115, name: 'Area 1' },
        { value: 173, name: 'Area 2' },
        { value: 154, name: 'Area 3' },
        { value: 180, name: 'Area 4' },
        { value: 219, name: 'Area 5' }
      ],
      itemStyle: pieStyle
    }
  ]
};

export { patientsAgeOptions, LocalityOptions, patientsGenderOptions };
