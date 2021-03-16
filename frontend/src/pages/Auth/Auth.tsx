import React from "react";

import { View } from "./Auth.view";

const Auth: React.FunctionComponent = () => {
  const [isLogin, setIsLogin] = React.useState(true);
  return <View isLogin={isLogin} onChangeAuth={() => setIsLogin(!isLogin)} />;
};

export { Auth };
