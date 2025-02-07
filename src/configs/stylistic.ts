import type { OptionsOverrides, StylisticConfig, TypedFlatConfigItem } from '../types';

import { pluginhadronomy } from '../plugins';
import { interopDefault } from '../utils';

export const StylisticConfigDefaults: StylisticConfig = {
  indent: 2,
  jsx: true,
  quotes: 'single',
  semi: true,
};

export interface StylisticOptions extends StylisticConfig, OptionsOverrides {
  lessOpinionated?: boolean;
}

export async function stylistic(
  options: StylisticOptions = {},
): Promise<TypedFlatConfigItem[]> {
  const {
    indent,
    jsx,
    lessOpinionated = false,
    overrides = {},
    quotes,
    semi,
  } = {
    ...StylisticConfigDefaults,
    ...options,
  };

  const pluginStylistic = await interopDefault(import('@stylistic/eslint-plugin'));

  const config = pluginStylistic.configs.customize({
    flat: true,
    indent,
    jsx,
    pluginName: 'style',
    quotes,
    semi,
  });

  return [
    {
      name: 'hadronomy/stylistic/rules',
      plugins: {
        hadronomy: pluginhadronomy,
        style: pluginStylistic,
      },
      rules: {
        ...config.rules,

        'hadronomy/consistent-chaining': 'error',
        'hadronomy/consistent-list-newline': 'error',

        ...(lessOpinionated
          ? {
              curly: ['error', 'all'],
            }
          : {
              'hadronomy/curly': 'error',
              'hadronomy/if-newline': 'error',
              'hadronomy/top-level-function': 'error',
            }
        ),

        ...overrides,
      },
    },
  ];
}
