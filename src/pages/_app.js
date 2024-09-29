import store from "@/store";
import "@/styles/globals.css";
import { Rubik } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`font-rubik ${rubik.variable}`}>
      <Provider store={store}>
        <Toaster position="top-center" reverseOrder={false} />
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}
