// @eslint-disable
import hadronomy from '@hadronomy/eslint-config';

export default hadronomy(
  { typescript: true, vue: true, svelte: true, astro: true },
  ...[],
);
