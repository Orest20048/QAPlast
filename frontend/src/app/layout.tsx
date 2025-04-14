
import "./globals.css";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata = {
  title: "Binary Tree Visualizer",
  description: "Visualize your Binary Search Trees in style",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground transition-colors">
        <ThemeToggle />
        <main className="max-w-5xl mx-auto px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
