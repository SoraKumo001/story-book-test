const path = require("path");
module.exports = ({ config }) => {
  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: "ts-loader",
          options: {
            ignoreDiagnostics: [7005]
          }
        },
        {
          loader: "@storybook/addon-storysource/loader"
        }
      ]
    },
    {
      test: /\.scss$/,
      loaders: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../styles")
    }
  );
  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};
