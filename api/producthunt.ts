import type { NowRequest, NowResponse } from '@now/node'
import axios from 'axios'

// https://ph-graph-api-explorer.herokuapp.com
// https://api.producthunt.com/v2/docs
// http://api-v2-docs.producthunt.com.s3-website-us-east-1.amazonaws.com
// https://www.producthunt.com/v2/oauth/applications

export default async (req: NowRequest, res: NowResponse) => {
  const requestPath = `https://api.producthunt.com/v2/api/graphql`
  try {
    const { data } = await axios(requestPath, {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.PRODUCT_HUNT_TOKEN}` },
      data: {
        query: `{
          viewer {
            user {
              votedPosts {
                edges {
                  node {
                    name
                    description
                    slug
                    website
                    votesCount
                  }
                }
              }
            }
          }
        }`,
      },
    })
    res.statusCode = 200
    res.json({
      body: data,
    })
  } catch (err) {
    res.json({
      body: 'nodata',
    })
  }
}
