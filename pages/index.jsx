import Head from 'next/head'
import {useQuery} from 'react-query'
import {getHomepagePosts, getHomepageProducts} from "../queries/queries";
import PostCard from "../components/PostCard";
import ProductCard from "../components/ProductCard";

export default function Home() {
    const {data: products, isSuccess} = useQuery("products", async () => await getHomepageProducts())

    console.log(products);

    return (
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <Head>
                <title>E-commerce Site</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Latest products</h2>

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {isSuccess && products.map(product => <ProductCard
                    product_name={product.product_name}
                    price={product.price}
                    key={product.id}
                    image={product.product_image.id}
                    category={product.product_categories[0].categories_id.category_name}
                />)}
            </div>
        </div>
    )
}
