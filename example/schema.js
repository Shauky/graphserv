export default `
    type Posts {
        id: ID!
        first_name: String
        last_namet: String
        email: String
        address: List
        zipcode: String
        city: String
        avatar: String
      }

    type PostsPage {
        items: [Posts]
        totalCount: Int
    }

    type Query {
        getPostsPage(page: Int, perPage: Int, sortField: String, sortOrder: String, filter: String): PostsPage
        getPosts(id: ID!): Posts
    }

    type Mutation {
        createPosts(data: String): Posts
        updatePosts(data: String): Posts
        removePosts(id: ID!): Boolean
    }
`;
// id: ID!
// description: String
// public: String
// created_at: String
// files: List
// owner: String
// div: String
// stylesheet: String
