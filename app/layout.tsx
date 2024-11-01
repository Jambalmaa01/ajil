// RootLayout.tsx
import { QueryProvider } from "./component/QueryProvider";
import { JotaiProvider } from "./lib/jotai/component/JoyaiProved";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <JotaiProvider>
          <QueryProvider>{children}</QueryProvider>
        </JotaiProvider>
      </body>
    </html>
  );
}
