/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAlbum = /* GraphQL */ `
  subscription OnCreateAlbum {
    onCreateAlbum {
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
export const onUpdateAlbum = /* GraphQL */ `
  subscription OnUpdateAlbum {
    onUpdateAlbum {
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
export const onDeleteAlbum = /* GraphQL */ `
  subscription OnDeleteAlbum {
    onDeleteAlbum {
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
export const onCreatePicture = /* GraphQL */ `
  subscription OnCreatePicture {
    onCreatePicture {
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
export const onUpdatePicture = /* GraphQL */ `
  subscription OnUpdatePicture {
    onUpdatePicture {
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
export const onDeletePicture = /* GraphQL */ `
  subscription OnDeletePicture {
    onDeletePicture {
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
