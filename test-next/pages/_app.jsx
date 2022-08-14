import "../styles/global.scss";

export function reportWebVitals(metric) {
  if (metric.label === "web-vital") {
    console.log(metric); // The metric object ({ id, name, startTime, value, label }) is logged to the console
  }
}

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default MyApp;
