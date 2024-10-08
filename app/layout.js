import localFont from "next/font/local";
import "./globals.css";
import Providers from "./providers";
import TopNav from "@/components/TopNav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Vivek Adapa",
  description: "vivek's developer portfolio",
};

export default function RootLayout({ children }) {
  // const [theme, setTheme] = useState("dark")
  return (
    <html lang="en" className="">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="">
            <TopNav />
            {children}
          </div>

        </Providers>
      </body>
    </html>
  );
}
