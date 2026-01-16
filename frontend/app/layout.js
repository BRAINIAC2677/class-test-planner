import './globals.css';

export const metadata = {
  title: 'Class Test Planner',
  description: 'Track your class test marks and plan your performance',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
