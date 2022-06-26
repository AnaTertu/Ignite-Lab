import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4u7pdoi0n8k01uogy6wfdjj/master',
    cache: new InMemoryCache()
})