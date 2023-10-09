import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
import {AdminLayout} from '../../layout/AdminLayout';

//
export const AdminPostIndex: FC<{ items: any[] }> = (props: { items: any[] }) => {
  const timeStamp = Date.now();
  return (
    <AdminLayout title="TaskIndex">
      <div>
        <div id="root"></div>
        {html`<script type="text/babel" src="/js/posts/index.js?${timeStamp}"></script>`}       
      </div>
    </AdminLayout>
  )
}

/*
*/