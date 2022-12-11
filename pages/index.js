import React, { useEffect, useState } from "react";

import useMediaQuery, { mobileBreakpoint } from "../modules/device";

import Meta from "../components/Meta";
import Layout from "../components/Layout";
import Content from "../components/Content";

export default function Home() {
  const mobile = useMediaQuery(mobileBreakpoint);

  const [selected, setSelected] = useState(0);

  const interval = 4000;
  const guns = [
    {
      name: "Talon 338",
      image: "/sig.jpg",
      video: mobile ? "../sig_mobile.mp4" : "../sig.mp4",
    },
    {
      name: "AR-15",
      image: "/ar15.jpg",
      video: mobile ? "../ar15_mobile.mp4" : "../ar15.mp4",
    },
    {
      name: "AK-47",
      image: "/ak47.jpg",
      video: mobile ? "../ak47_mobile.mp4" : "../ak47.mp4",
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
