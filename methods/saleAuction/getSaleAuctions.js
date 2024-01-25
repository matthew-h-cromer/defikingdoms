import { gql } from 'graphql-request';

const GET_SALE_AUCTIONS = gql`
  query saleAuctions(
    $skip: Int
    $first: Int
    $orderBy: AuctionOrderBy
    $orderDirection: OrderDirection
    $where: AuctionFilter
  ) {
    saleAuctions(
      skip: $skip
      first: $first
      orderBy: $orderBy
      orderDirection: $orderDirection
      where: $where
    ) {
      id
      seller {
        id
      }
      tokenId {
        numberId
      }
      startingPrice
      endingPrice
      duration
      startedAt
      winner {
        id
      }
      endedAt
      open
      purchasePrice
    }
  }
`;

export default async function (args) {
  const { skip, first, orderBy, orderDirection, where } = args ?? {};

  const { saleAuctions } = await this.dfkApi.request(GET_SALE_AUCTIONS, {
    skip,
    first,
    orderBy,
    orderDirection,
    where
  });

  return saleAuctions;
}
