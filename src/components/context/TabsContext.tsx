import React from "react";

export interface TabsContextInterface {
  index: number;
}

const context = React.createContext<TabsContextInterface>({
  index: 0
});

export const TabsContextConsumer = context.Consumer;
export const TabsContextProvider = context.Provider;
