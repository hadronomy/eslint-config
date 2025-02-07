// @eslint-disable
import hadronomy from '@hadronomy/eslint-config';

export default hadronomy(
  { jsx: false, vue: false, markdown: false, formatters: { markdown: true } },
  ...[],
);
