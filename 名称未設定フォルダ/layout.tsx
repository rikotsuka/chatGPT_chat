import React from "react";

export default function RootLayout
({ children }: { children: React.ReactNode }) {
        return (
           <html lang="ja">
             <body>
              <div className="container">{children}</div>
             </body>
           </html>
        );
       }
       
  