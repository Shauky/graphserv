import { ApolloServer, gql } from 'apollo-server-micro';
var path = require('path');
var data = require('./jsondata.json');

const Posts = [data];

const typeDefs = gql`
    type Posts {
        id: ID!
        description: String
        public: String
        created_at: String
        files: String
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
        getPosts(id: ID!): [Posts]
        Posts(id: ID!): [Posts]

    }

    type Mutation {
        createPosts(data: String): Posts
        updatePosts(data: String): Posts
        removePosts(id: ID!): Boolean
    }
`;


const resolvers = {
  Query: {
    getPosts: () => {
      return Posts;
    },
  },
};


const server = new ApolloServer({ typeDefs, resolvers });

export default server.createHandler({
  path: '/api/serverless',
});

export const config = {
  api: {
    bodyParser: false,
  },
};
