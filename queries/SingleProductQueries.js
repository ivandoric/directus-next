export const SingleProductQuery = `
    #graphql
    query SingleProduct($product_slug: String) {
        products(filter: {slug: {_eq: $product_slug}}) {
            id
            slug
            product_name
            price
            product_image {
                id
            }
            available_colors {
                product_colors_id {
                    id
                    color_value
                    color_name
                }
            }
            available_sizes {
                product_sizes_id {
                    id
                    long_title
                    short_title
                }
            }
            show_colors
            show_sizes
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
