import getData from "../../../queries/getData";
import {SingleProductQuery} from "../../../queries/SingleProductQueries";
import Head from "next/head";

const assetsUrl = process.env.NEXT_PUBLIC_ASSETS_URL

export default function ProductPage({product}){
    console.log(product)

    return (
        <section className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <Head>
                <title>{product.product_name}</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className="md:flex">
                <div className="">
                    <img className="w-full object-center object-cover group-hover:opacity-75" src={`${assetsUrl}/${product.product_image.id}?width=385&height=385`} />
                </div>
                <div className="mt-2 md:ml-4">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 ">{product.product_name}</h2>
                </div>
            </div>
        </section>
    )
}

export const getServerSideProps = async (ctx) => {
    const {slug} = ctx.query
    const data = await getData(SingleProductQuery, 'products', {product_slug: slug})

    return {
        props: {
            product: data[0]
        },
    }
}
