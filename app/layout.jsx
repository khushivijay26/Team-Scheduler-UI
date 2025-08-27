import "./globals.css";

export const metadata = {
  title: "Team Scheduler UI",
  description: "Practical assignment: Figma to Next.js with Tailwind",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}