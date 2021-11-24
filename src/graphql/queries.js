/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAlbum = /* GraphQL */ `
  query GetAlbum($id: ID!) {
    getAlbum(id: $id) {
      id
      title
      owner
      createdAt
      pictures {
        items {
          id
          name
          owner
          visibility
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const listAlbums = /* GraphQL */ `
  query ListAlbums(
    $filter: ModelAlbumFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlbums(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        owner
        createdAt
        pictures {
          nextToken
        }
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPicture = /* GraphQL */ `
  query GetPicture($id: ID!) {
    getPicture(id: $id) {
      id
      name
      owner
      visibility
      file {
        bucket
        region
        key
      }
      createdAt
      album {
        id
        title
        owner
        createdAt
        pictures {
          nextToken
        }
        updatedAt
      }
      updatedAt
    }
  }
`;
export const listPictures = /* GraphQL */ `
  query ListPictures(
    $filter: ModelPictureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPictures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        owner
        visibility
        file {
          bucket
          region
          key
        }
        createdAt
        album {
          id
          title
          owner
          createdAt
          updatedAt
        }
        updatedAt
      }
      nextToken
    }
  }
`;
