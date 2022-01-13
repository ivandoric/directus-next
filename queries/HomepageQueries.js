export const HomepageProductsQuery = `
    #graphql
    query HomepageProducts {
        products {
            id
            product_name
            price
            slug
            product_image {
                id
            }
            category {
                categories_id {
                    id
                    category_name
                    slug
                }
            }
        }
    }
`

export const HomepageCategoriesQuery = `
    #graphql
    query HomepageCategories {
        categories {
            id
            category_name
        }
    }
`

export const HomepageFilteredProductsQuery = `
    #graphql
    query HomepageProducts($categories: [Float]) {
        products(filter: { category: { categories_id: { id: {_in: $categories}} } }) {
            id
            product_name
            price
            slug
            product_image {
                id
            }
            category {
                categories_id {
                    id
                    category_name
                    slug
                }
            }
        }
    }
`
