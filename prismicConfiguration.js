// -- Prismic Repo Name
export const repoName = 'ignite-template-reactjs-criando-um-projeto-do-zero'

// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = `https://${desafio04dozero}.prismic.io/api/v2`

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = 'MC5ZWVB5M3hFQUFDVUFMeUlh.QO-_vSHvv71-MHIQUu-_vSd4Au-_vQnvv71o77-9WQHvv73vv701be-_vWtD77-9Gjzvv73vv70'

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  if (doc.type === 'page') {
    return `/${doc.uid}`
  }
  return '/'
}

// -- Route Resolver rules
// Manages the url links to internal Prismic documents two levels deep (optionals)
export const Router = {
  routes: [
    {
      "type":"page",
      "path":"/:uid"
    },
  ]
};