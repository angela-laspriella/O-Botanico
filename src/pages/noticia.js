import React from "react";
import NoticiaSection from "../components/Noticia";
import { noticias } from "../data/data";

function Noticia() {
  return (
    <>
      <NoticiaSection data={noticias} />
    </>
  );
}

export default Noticia;
