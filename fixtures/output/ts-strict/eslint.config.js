// @eslint-disable
import hadronomy from '@hadronomy/eslint-config';

export default hadronomy(
  { typescript: { tsconfigPath: './tsconfig.json' } },
  ...[{ rules: { 'ts/no-unsafe-return': ['off'] } }],
);
