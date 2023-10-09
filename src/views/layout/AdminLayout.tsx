import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
let title = "Welcome";
//
export const AdminLayout: FC = (props) => {
//console.log(props);
  if(props.title){title = props.title;}
  return (
    <html>
      <head>
        <title>{title}</title>
        {html`
        <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        `}        
        {/* CSS */}
        {html`
        <link href="/styles/main.css" rel="stylesheet">
        <link href="/styles/globals.css" rel="stylesheet">
        `}        
      </head>
      <div class="text-center py-2">
        <a href="/">[ Top ]</a>
        <a href="/admin">[ home ]</a>
        <a href="/admin/posts"><span class="ps-2">[ Posts ]</span></a>
        <a href="/admin/pages"><span class="ps-2">[ Pages ]</span></a>
      </div>
      <hr />
      <body>
        <div class="container mx-auto my-2 px-8 bg-white">{props.children}</div>
      </body>
    </html>
  )
}
