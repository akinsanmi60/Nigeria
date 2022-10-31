declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}
declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "@paystack/inline-js";
declare module "@chakra-ui/icons";
declare module "react-slick";
