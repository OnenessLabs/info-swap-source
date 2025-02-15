import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://subgraph.devnet.onenesslabs.io/subgraphs/name/oneness/oneswap',
    // uri: 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswap-v2-dev',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const healthClient = new ApolloClient({
  link: new HttpLink({
    // uri: 'https://api.thegraph.com/index-node/graphql',
    uri: 'https://index-node.devnet.onenesslabs.io/graphql',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const v1Client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswap',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const stakingClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/way2rach/talisman',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const blockClient = new ApolloClient({
  link: new HttpLink({
    // uri: 'https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks',
    uri: 'https://subgraph.devnet.onenesslabs.io/subgraphs/name/blocklytics/ethereum-blocks',
  }),
  cache: new InMemoryCache(),
})
