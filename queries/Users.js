export const createNewUser = `
    #graphql
    mutation createNewUser($data: create_directus_users_input!) {
        create_users_item(data: $data)
    }
`;

export const getCurrentUser = `
    #graphql
    query {
        users_me {
            email
            first_name
            last_name
        }
    }
`;
