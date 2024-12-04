import React, { useEffect } from "react";
import WebFont from "webfontloader";

export default function Home() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Fjalla One"],
      },
    });
  }, []);

  return <div>{/* Votre contenu ici */}</div>;
}


export default WebFontLoader;