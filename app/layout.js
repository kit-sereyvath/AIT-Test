import "./globals.css";
import { Inter } from "next/font/google";
import WriteReviewPage from "./write_review_page/write_review_page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin = 'true'
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,500;9..40,600;9..40,700;9..40,800;9..40,900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={inter.className}>
        <WriteReviewPage></WriteReviewPage>
      </body>
    </html>
  );
}
