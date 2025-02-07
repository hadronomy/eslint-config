// @eslint-disable
import hadronomy from "@hadronomy/eslint-config";

export default hadronomy(
	{ typescript: true, vue: true, stylistic: { indent: "tab", quotes: "double" } },
	...[{ rules: { "style/no-mixed-spaces-and-tabs": "off" } }],
);
