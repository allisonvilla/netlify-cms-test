import Head from 'next/head';
import { attributes, react as PostContent } from '../../content/posts.md';

export default function Posts() {
	let { title, posts } = attributes;

	return (
		<>
			<Head>
				<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
			</Head>
			<article>
				<h1>{title}</h1>
				<PostContent />
				<ul>
					{posts.map((post, k) => {
						<li key={k}>
							<h2>{post.name}</h2>
							<p>{post.content}</p>
						</li>;
					})}
				</ul>
			</article>
		</>
	);
}
