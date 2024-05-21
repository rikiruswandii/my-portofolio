import "./globals.css";

export const metadata = {
  title: "Portofolio",
  description: "this is my portofolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
