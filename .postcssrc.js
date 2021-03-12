const postcssPresetEnv = require('postcss-preset-env');
// const purgecss = require('@fullhuman/postcss-purgecss');
const postcssCustomProperties = require('postcss-custom-properties');

module.exports = {
  plugins: [
    postcssPresetEnv({
      stage: 2,
      features: {
        'nesting-rules': true,
      },
    }),
    require('autoprefixer'),
    postcssCustomProperties({
      importFrom: [
        {
          customProperties: {
            '--slide-translate': '22px',
            '--slide-duration': '0.15s',
            '--slide-timing': 'ease',
            '--day-content-width': '28px',
            '--day-content-transition-time': '0.13s ease-in',
            '--day-content-bg-color-hover': 'hsla(211, 25%, 84%, 0.3)',
            '--day-content-dark-bg-color-hover': 'hsla(216, 15%, 52%, 0.3)',
            '--day-content-bg-color-focus': 'hsla(211, 25%, 84%, 0.4)',
            '--day-content-dark-bg-color-focus': 'hsla(216, 15%, 52%, 0.4)',
            '--popover-horizontal-content-offset': ' 8px',
            '--popover-vertical-content-offset': ' 10px',
            '--popover-slide-translation': ' 15px',
            '--popover-transition-time': ' 0.14s ease-in-out',
            '--popover-caret-horizontal-offset': ' 18px',
            '--popover-caret-vertical-offset': ' 8px',

            '--white': '#ffffff',
            '--black': '#000000',
          
            '--gray-100': '#f7fafc',
            '--gray-200': '#edf2f7',
            '--gray-300': '#e2e8f0',
            '--gray-400': '#cbd5e0',
            '--gray-500': '#a0aec0',
            '--gray-600': '#718096',
            '--gray-700': '#4a5568',
            '--gray-800': '#2d3748',
            '--gray-900': '#1a202c',
          
            '--red-100': '#fff5f5',
            '--red-200': '#fed7d7',
            '--red-300': '#feb2b2',
            '--red-400': '#fc8181',
            '--red-500': '#f56565',
            '--red-600': '#e53e3e',
            '--red-700': '#c53030',
            '--red-800': '#9b2c2c',
            '--red-900': '#742a2a',
          
            '--orange-100': '#fffaf0',
            '--orange-200': '#feebc8',
            '--orange-300': '#fbd38d',
            '--orange-400': '#f6ad55',
            '--orange-500': '#ed8936',
            '--orange-600': '#dd6b20',
            '--orange-700': '#c05621',
            '--orange-800': '#9c4221',
            '--orange-900': '#7b341e',
          
            '--yellow-100': '#fffff0',
            '--yellow-200': '#fefcbf',
            '--yellow-300': '#faf089',
            '--yellow-400': '#f6e05e',
            '--yellow-500': '#ecc94b',
            '--yellow-600': '#d69e2e',
            '--yellow-700': '#b7791f',
            '--yellow-800': '#975a16',
            '--yellow-900': '#744210',
          
            '--green-100': '#f0fff4',
            '--green-200': '#c6f6d5',
            '--green-300': '#9ae6b4',
            '--green-400': '#68d391',
            '--green-500': '#48bb78',
            '--green-600': '#38a169',
            '--green-700': '#2f855a',
            '--green-800': '#276749',
            '--green-900': '#22543d',
          
            '--teal-100': '#e6fffa',
            '--teal-200': '#b2f5ea',
            '--teal-300': '#81e6d9',
            '--teal-400': '#4fd1c5',
            '--teal-500': '#38b2ac',
            '--teal-600': '#319795',
            '--teal-700': '#2c7a7b',
            '--teal-800': '#285e61',
            '--teal-900': '#234e52',
          
            '--blue-100': '#ebf8ff',
            '--blue-200': '#bee3f8',
            '--blue-300': '#90cdf4',
            '--blue-400': '#63b3ed',
            '--blue-500': '#4299e1',
            '--blue-600': '#3182ce',
            '--blue-700': '#2b6cb0',
            '--blue-800': '#2c5282',
            '--blue-900': '#2a4365',
          
            '--indigo-100': '#ebf4ff',
            '--indigo-200': '#c3dafe',
            '--indigo-300': '#a3bffa',
            '--indigo-400': '#7f9cf5',
            '--indigo-500': '#667eea',
            '--indigo-600': '#5a67d8',
            '--indigo-700': '#4c51bf',
            '--indigo-800': '#434190',
            '--indigo-900': '#3c366b',
          
            '--purple-100': '#faf5ff',
            '--purple-200': '#e9d8fd',
            '--purple-300': '#d6bcfa',
            '--purple-400': '#b794f4',
            '--purple-500': '#9f7aea',
            '--purple-600': '#805ad5',
            '--purple-700': '#6b46c1',
            '--purple-800': '#553c9a',
            '--purple-900': '#44337a',
          
            '--pink-100': '#fff5f7',
            '--pink-200': '#fed7e2',
            '--pink-300': '#fbb6ce',
            '--pink-400': '#f687b3',
            '--pink-500': '#ed64a6',
            '--pink-600': '#d53f8c',
            '--pink-700': '#b83280',
            '--pink-800': '#97266d',
            '--pink-900': '#702459'
          }
        }
      ]
    })
  ],
};
