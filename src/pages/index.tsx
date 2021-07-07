import HeaderPresenter from "src/components/common/headerPresenter";
import config from "constants/config.json";

import Head from "next/head";

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title>광대숲</title>
        <meta name="description" content="광대숲" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <HeaderPresenter location={config.LINK.HOME} />
    </>
  );
};
export default Index;
