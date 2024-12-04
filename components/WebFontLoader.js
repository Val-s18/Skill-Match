import { useEffect } from "react";
import WebFont from "webfontloader";

const WebFontLoader = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Fjalla One", "Roboto:400,700"],
      },
    });
  }, []);

  return null;
};

export default WebFontLoader;
