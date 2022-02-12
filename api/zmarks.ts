import type { NowRequest, NowResponse } from '@now/node'
import axios from 'axios'

export default async (req: NowRequest, res: NowResponse) => {
  const requestPath = `https://zmarks.zander.wtf/api/collections/zm:link??limit=${req.query.count}`
  const { data } = await axios(requestPath, {
    headers: { Authorization: `Bearer ${process.env.ZMARKS_SUPABASE_TOKEN}` },
  })
  res.statusCode = 200
  res.json({
    body: data,
  })
}
