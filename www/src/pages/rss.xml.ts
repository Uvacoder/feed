import rss from '@astrojs/rss';
import { getPosts } from '../utils/data';

const posts = await getPosts()

export const get = () => rss({
  title: 'Nate Moore\'s Feed',
  description: 'Short-form thoughts from Nate',
  site: import.meta.env.SITE,
  items: posts.map(post => ({
    link: new URL(`/p/${post.id}`, import.meta.env.SITE).toString(),
    title: post.id,
    description: post.content.split('---').at(0),
    pubDate: post.data.date,
  })),
});
