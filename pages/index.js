import Head from 'next/head'
import {useQuery} from 'react-query'
import {getHomepagePosts} from "../queries/queries";
import PostCard from "../components/PostCard";

export default function Home() {
    const {data: posts, isSuccess} = useQuery("posts", async () => await getHomepagePosts())

    console.log(posts);

    return (
        <div className="flex flex-col items-center py-2 max-w-2xl mx-auto">
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            {isSuccess && posts.map(post => <PostCard title={post.title} body={post.body} key={post.id} image={post.featured_image.id}/>)}
        </div>
    )
}
