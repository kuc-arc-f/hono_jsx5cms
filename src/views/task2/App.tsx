import type { FC } from 'hono/jsx'
import { html } from 'hono/html'
import {Layout} from '../layout';

//
export const Task2Index: FC<{ items: any[] }> = (props: { items: any[] }) => {
  const timeStamp = Date.now();
  return (
    <Layout title="TaskIndex">
      <div>
        <div id="root"></div>
        {html`<script type="text/babel" src="/js/task2/index.js?${timeStamp}"></script>`}       
      </div>
    </Layout>
  )
}

/*
*/