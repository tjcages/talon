import React, { useEffect, useState } from "react";

import Meta from "../components/Meta";
import Layout from "../components/Layout";
import Content from "../components/Content";

export default function Home() {
  const [selected, setSelected] = useState(0);

  const interval = 4000;
  const guns = [
    {
      name: "Sig 338",
      image: "/sig.jpg",
      video: "../sig.mov",
    },
    {
      name: "AR-15",
      image: "/ar15.jpg",
      video: "../ar15.mov",
    },
    {
      name: "AK-47",
      image: "/ak47.jpg",
      video: "../ak47.mov",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setSelected((selected + 1) % guns.length);
    }, interval);
  });

  return (
    <Meta>
      <Layout gun={guns[selected]}>
        <Content gun={guns[selected]} />
      </Layout>
    </Meta>
  );
}
