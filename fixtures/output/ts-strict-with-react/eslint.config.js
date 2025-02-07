// @eslint-disable
import hadronomy from '@hadronomy/eslint-config';

export default hadronomy(
  { typescript: { tsconfigPath: './tsconfig.json' }, react: true },
  ...[{ rules: { 'ts/no-unsafe-return': ['off'] } }],
);
