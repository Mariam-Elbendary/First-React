import React from "react";

    const FirstContext = React.createContext();

    const ContextProvider = FirstContext.Provider;
    const ContextConsumer = FirstContext.Consumer;

export {ContextProvider , ContextConsumer};