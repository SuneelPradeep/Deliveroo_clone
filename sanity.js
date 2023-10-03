import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({ 
    projectId: '',      //enter your project id here
    dataset: 'production',
    useCdn: true,
    apiVersion : '2021-10-21'
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)

//sanity cors add http://localhost:19000

export default client;