import { useEffect } from "react";
import WebFont from "webfontloader";

const WebFontLoader = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Fjalla One"],
      },
    });
  }, []);

  return null;
};

export default WebFontLoader;
