import React, { useState, FunctionComponent } from "react";

import ScrollView from "../ScrollView";
import Layout from "../Layout";
import {
  TabsContextInterface,
  TabsContextProvider,
  TabsContextConsumer
} from "../context/TabsContext";

//tabs
const Home = React.lazy(() => import("./Home"));
const About = React.lazy(() => import("./About"));
const Portofolio = React.lazy(() => import("./Portofolio"));
const Contact = React.lazy(() => import("./Contact"));

export const Tabs = [<Home />, <About />, <Portofolio />, <Contact />];

export const InitialState: TabsContextInterface = {
  index: 0
};

export default () => {
  const [tabs, setTabs] = useState(InitialState);
  console.log(tabs);
  return (
    <Layout setTabs={setTabs}>
      <TabsContextProvider value={tabs}>
        <TabsContextConsumer>
          {({ index }: any) => <ScrollView>{Tabs[index]}</ScrollView>}
        </TabsContextConsumer>
      </TabsContextProvider>
    </Layout>
  );
};
