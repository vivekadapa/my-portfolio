import localFont from "next/font/local";
import "./globals.css";
import NavbarDemo from "@/components/Navbar";

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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  // const [theme, setTheme] = useState("dark")
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <div className="fixed z-50 bottom-10"> */}
          <NavbarDemo className={""} />
        {/* </div> */}
        {children}

      </body>
    </html>
  );
}
