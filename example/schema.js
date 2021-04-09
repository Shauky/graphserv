export default `
    type Posts {
        id: ID!
        description: String
        public: String
        created_at: String
        files: List
        owner: String
        div: String
        stylesheet: String
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
