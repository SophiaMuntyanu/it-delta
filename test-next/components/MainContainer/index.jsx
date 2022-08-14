import Header from "../Header";
import Head from "next/head";
import Footer from "../Footer";

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={"user next" + keywords}></meta>
        <title>Next</title>
        <link href="//fonts.googleapis.com/css?family=Montserrat:thin,extra-light,light,100,200,300,400,500,600,700,800" />
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default MainContainer;
