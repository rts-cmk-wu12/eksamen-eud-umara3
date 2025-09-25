
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";



export const metadata = {
  title: "Swap Hub",
  description: "Play with your old things",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Header />
        {children}
        <Footer/>
      </body>
      
    </html>
  );
}
