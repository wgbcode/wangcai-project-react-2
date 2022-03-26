import React from "react";
// require("components/Icons/tags.svg"); // svgo-loader => svg-sprite-loader
// require("components/Icons/money.svg");
// require("components/Icons/statistics.svg");

let importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context("../icons", true, /\.svg$/));
} catch (error) {
  console.log(error);
}

type Props = {
  name: string;
};

const Icon = (props: Props) => {
  return (
    <svg className="icon">
      <use xlinkHref={"#" + props.name} />
    </svg>
  );
};

export default Icon;
