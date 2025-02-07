// @eslint-disable
import hadronomy from '@hadronomy/eslint-config';

export default hadronomy(
  { typescript: true },
  ...[{ rules: { 'ts/consistent-type-definitions': ['error', 'type'] } }],
);
