import type { NowRequest, NowResponse } from '@now/node'
import axios from 'axios'

const URL = 'https://api.github.com/users/mrmartineau/starred'

export default async (req: NowRequest, res: NowResponse) => {
  const { data } = await axios(URL)
  res.statusCode = 200
  res.json({
    body: data,
  })
}
