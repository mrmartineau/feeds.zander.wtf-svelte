import type { NowRequest, NowResponse } from '@now/node'
import axios from 'axios'

export default async (req: NowRequest, res: NowResponse) => {
  console.log(`🚀 ~ req.query.tag`, req.query.tag)
  // const requestPath = `https://otter.zander.wtf/api/tag/${req.query.tag}?limit=${req.query.count}`
  const requestPath = `http://localhost:3000/api/tag/${req.query.tag}?limit=${req.query.count}`
  console.log(`🚀 ~ requestPath`, requestPath)
  const { data } = await axios(requestPath, {
    headers: { Authorization: `Bearer ${process.env.ZMARKS_SUPABASE_TOKEN}` },
  })
  res.statusCode = 200
  res.json({
    body: data,
  })
}
