import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ConsultantList } from "./consultant/ConsultantList";
import { ConsultantCreate } from "./consultant/ConsultantCreate";
import { ConsultantEdit } from "./consultant/ConsultantEdit";
import { ConsultantShow } from "./consultant/ConsultantShow";
import { AnalyseList } from "./analyse/AnalyseList";
import { AnalyseCreate } from "./analyse/AnalyseCreate";
import { AnalyseEdit } from "./analyse/AnalyseEdit";
import { AnalyseShow } from "./analyse/AnalyseShow";
import { ScriptList } from "./script/ScriptList";
import { ScriptCreate } from "./script/ScriptCreate";
import { ScriptEdit } from "./script/ScriptEdit";
import { ScriptShow } from "./script/ScriptShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Base App"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Consultant"
          list={ConsultantList}
          edit={ConsultantEdit}
          create={ConsultantCreate}
          show={ConsultantShow}
        />
        <Resource
          name="Analyse"
          list={AnalyseList}
          edit={AnalyseEdit}
          create={AnalyseCreate}
          show={AnalyseShow}
        />
        <Resource
          name="Script"
          list={ScriptList}
          edit={ScriptEdit}
          create={ScriptCreate}
          show={ScriptShow}
        />
      </Admin>
    </div>
  );
};

export default App;
