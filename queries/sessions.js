export const createSession = `
  #graphql
  mutation createSessionItem($data: create_session_input!) {
      create_session_item(data: $data) {
          id
      }
  }
`

export const updateSession = `
  #graphql
  mutation updateSessionItem($data: update_session_input!, $id: ID!) {
      update_session_item(data: $data, id: $id) {
          id
      }
  }
`

export const getSession = `
    #graphql
    query getSessionItem($id: ID!) {
        session_by_id(id: $id) {
            id
            temp_order
        }
    }
`
