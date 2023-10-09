import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
//import {Layout} from '../../layout';
import {AdminLayout} from '../../../layout/AdminLayout';
//
export const AdminPostShow: FC<{ item: any, id: number }> = (props: { item: any, id: number }) => {
console.log("#taskShow");
console.log(props);
    const timeStamp = Date.now();
    return (
    <AdminLayout title="AdminPostShow">
        <div>
            <a href="/tasks" class="btn-outline-purple ms-2 my-2">back</a>
            <hr class="my-4" />
            <div id="root"></div>
            {html`
            <script type="text/babel">
            let TaskItemId = ${props.id};
            </script>`
            } 
            {html`<script type="text/babel" src="/js/posts/show.js?${timeStamp}"></script>`}  
            <button id="btn_delete" class="btn-red ms-2 my-2">Delete</button>
            {html`<script type="text/babel" src="/js/posts/delete.js?${timeStamp}"></script>`}
        </div>
    </AdminLayout>
)
}