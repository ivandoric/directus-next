import fetchData from "../helpers/fetchData";
import {HomepagePostsQuery, HomepageProductsQuery, HomepageCategoriesQuery, HomepageFilteredProductsQuery} from "./HomepageQueries"

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

export const getHomepageCategories = async () => {
    const data = await fetchData(
        HomepageCategoriesQuery,
        {
            variables: {}
        }
    )

    return data.data.categories
}

export const getHomepageFilteredProducts = async (categories) => {
    const data = await fetchData(
        HomepageFilteredProductsQuery,
        {
            variables: {
                categories
            }
        }
    )

    return data.data.products
}
