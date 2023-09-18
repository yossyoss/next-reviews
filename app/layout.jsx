export default function Layout({children}) {
    return (
        <html lng="en">
            <body>
            <header>
          [header]
        </header>
        <main>
          {children}
        </main>
        <footer>
          [footer]
        </footer>
            </body>
        </html>
    )
}