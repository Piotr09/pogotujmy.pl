export type Urls = {
  cockpitHost: string
  cockpitUrl: string
  singletonUrl: string
  collectionsUrl: string
  imagesUrl: string
  formUrl: string
  mainUrl: string
  wordpressHost: string
}

const cockpitUrl = `${process.env.COCKPIT_HOST}${process.env.COCKPIT_PATH}`
const mainUrl = `${process.env.COCKPIT_HOST}`
export const urls: Urls = {
  cockpitUrl,
  cockpitHost: process.env.COCKPIT_HOST,
  singletonUrl: `${cockpitUrl}/api/singletons`,
  collectionsUrl: `${cockpitUrl}/api/collections`,
  imagesUrl: `${cockpitUrl}/storage/uploads`,
  mainUrl,
  formUrl: `${cockpitUrl}/api/forms/submit/Contact?token=`,
  wordpressHost: process.env.WORDPRESS_API_URL,
}
