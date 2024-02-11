module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          extensions: [".jsx", ".js", ".json"],
          alias: {
            "@/structure": "./src/components/structure",
            "@/ui": "./src/components/ui",
            "@/components": "./src/components",
            "@/screens": "./src/screens",
            "@/constants": "./src/constants",
            "@/utils": "./src/utils",
            "@/services": "./src/services",
            "@/themes": "./src/themes",
            "@/styles": "./src/styles",
            "@/features": "./src/features",
            "@/navigation": "./src/navigation",
          },
        },
      ],
    ],
  };
};
