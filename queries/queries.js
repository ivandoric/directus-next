import fetchData from "../helpers/fetchData";
import {HomepagePostsQuery, HomepageProductsQuery} from "./HomepageQueries"

export const getHomepagePosts = async () => {
    const data = await fetchData(
        HomepagePostsQuery,
        {
            variables: {}
        }
    )

    return data.data.posts
}

export const getHomepageProducts = async () => {
    const data = await fetchData(
        HomepageProductsQuery,
        {
            variables: {}
        }
    )

    return data.data.products
}
