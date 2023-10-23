import fetch from 'isomorphic-unfetch'
const token = process.env.COCKPIT_TOKEN
import { urls } from '@config'

export const getCollection = async (collectionName: string, slug?: string) =>
  await fetch(`${urls.collectionsUrl}/get/${collectionName}`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json', 'Cockpit-Token': token },
    body: JSON.stringify({
      filter: { slug },
      sort: { _created: -1 },
    }),
  })

export const getSingleton = async (singletonName: string) =>
  await fetch(`${urls.singletonUrl}/get/${singletonName}`, {
    headers: { 'Cockpit-Token': token },
  })

async function fetchWordpress(query, { variables } = {}) {
  const headers = { 'Content-Type': 'application/json' }

  if (process.env.WORDPRESS_API_URL) {
    headers[
      'Authorization'
    ] = `Bearer ${process.env.WORDPRESS_API_URL}`
  }

  const res = await fetch(process.env.WORDPRESS_API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getPostsByCategoryName(categoryName) {
  const data = await fetchWordpress(
    `query PostByCategoryName {
    posts(where: {categoryName: "${categoryName}"}, first: 300) {
      edges {
        node {
          title
          slug
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  }`, {
    variables: {},
  }
  );
  return data?.posts?.edges;
}

export async function getWordpressPosts(number = 700) {
  const data = await fetchWordpress(
    `query AllPosts {
          posts(first: ${number}) {
            edges {
              node {
                title
                slug
                featuredImage {
                  node {
                    altText
                    sourceUrl
                  }
                }
                content
                date
                categories {
                  edges {
                    node {
                      id
                      name
                    }
                  }
                }
                seo {
                  title
                  metaKeywords
                  opengraphImage {
                    sourceUrl
                  }
                  opengraphTitle
                  metaDesc
                }
              }
            }
          }
        }
      `,
    {
      variables: {},
    }
  );
  return data?.posts?.edges;
}

export async function getArticles() {
  const data = await fetchWordpress(
    `query AllPosts {
        posts(first: 1000, where: {categoryNotIn: 3849}) {
          edges {
            node {
              title
              slug
              featuredImage {
                node {
                  altText
                  sourceUrl
                }
              }
              content
            }
          }
        }
      }
    `,
    {
      variables: {},
    }
  );
  return data?.posts?.edges;
}



export async function getCategoriesByParent(id) {
  const data = await fetchWordpress(
    `query CategoryByParent {
        category(id: "${id}", idType: SLUG) {
          children {
            edges {
              node {
                name
                slug
              }
            }
          }
          name
        }
      }
    `,
  )
  return data.category
}

export async function getTagBySlug(id) {
  const data = await fetchWordpress(
    `query CategoryByParent {
        tag(id: "${id}", idType: SLUG) {
          name
        }
      }
    `,
  )
  return data
}

export async function getTags() {
  const data = await fetchWordpress(
    `query Tags {
        tags(first: 1000) {
          edges {
            node {
              name
              slug
            }
          }
        }
      }
    `,
  )
  return data.tags.edges
}

export async function getPostsByTag(slug) {
  const data = await fetchWordpress(
    `query Tags {
        posts(where: {tagSlugIn: "${slug}"}) {
          edges {
            node {
              slug
              title
              featuredImage {
                node {
                  altText
                  sourceUrl
                }
              }
            }
          }
        }
      }
    `,
  )
  return data.posts.edges
}

// export async function getCategoriesByParent(){
//   const data = await fetchWordpress(
//       `query AllCategories {
//         categories(where: {slug: "skladniki"}) {
//           nodes {
//             name
//             slug
//             children {
//               nodes {
//                 name
//                 slug
//               }
//             }
//           }
//         }
//       }
//     `,
//     );
//   return data?.categories?.edges
// }

export async function getPostByCategory(category) {
  const data = await fetchWordpress(
    `query AllPosts {
        posts(where: {categoryName: ${category}}) {
          edges {
            node {
              title
              slug
              featuredImage {
                node {
                  altText
                  sourceUrl
                }
              }
            }
          }
        }
      }
    `
  );
  return data?.posts?.edges;
}

export async function getCategories(id) {
  const data = await fetchWordpress(
    `query AllCategories {
        categories(where: {parent: ${id}}) {
          edges {
            node {
              slug
              name
              parent {
                node {
                  name
                  slug
                }
              }
              id
            }
          }
        }
      }
    `,
    {
      variables: {},
    },
  )
  return data?.categories?.edges
}

export async function getAllCategories() {
  const data = await fetchWordpress(
    `query AllCategories {
        categories {
          edges {
            node {
              slug
              name
              parent {
                node {
                  name
                  slug
                }
              }
              id
            }
          }
        }
      }
    `,
    {
      variables: {},
    },
  )
  return data?.categories?.edges
}

export async function getFeaturedPosts(tag) {
  const data = await fetchWordpress(
    `query AllPosts {
        posts(where: {tag: "${tag}"})  {
          edges {
            node {
              title
              slug
              excerpt
              featuredImage {
                node {
                  altText
                  sourceUrl
                }
              }
            }
          }
        }
      }
    `,
  )
  return data?.posts?.edges
}

export async function getSinglePost(id) {
  const data = await fetchWordpress(
    `query getSinglePost{
      post(id: ${id}, idType: SLUG){           
            title
            categories{
            edges{
                node{
                name
                }
            }
            }
            excerpt
            content
            slug
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
            tags {
              edges {
                node {
                  name
                  slug
                }
              }
            }
            id
            author {
              node {
                name
                firstName
                lastName
              }
            }
            seo {
              fullHead
              metaDesc
            }
      }
    }
  `, { id });

  return data?.post;
}

export async function getSingleCategory(id) {
  const data = await fetchWordpress(
    `query getSingleCategory{
      category(idType: SLUG, id: ${id}){           
        name
        slug
      }
    }
  `, { id });

  return data?.post;
}

// export const getSlider = async (
//   firstHeroSlider: string,
//   secondHeroSlider: string,
//   thirdHeroSlider: string,
// ) => {
//   return await fetch(`${urls.collectionsUrl}/get/Recipe`, {
//     method: 'post',
//     headers: { 'Content-Type': 'application/json', 'Cockpit-Token': token },
//     body: JSON.stringify({
//       filter: {
//         _id: {
//           $in: [firstHeroSlider, secondHeroSlider, thirdHeroSlider],
//         },
//       },
//       populate: 0,
//       simple: 1,
//       sort: { _created: -1 },
//     }),
//   })
// }
