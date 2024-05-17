import { describe, expect, it } from 'vitest'
import { JikeClient, isSuccess } from '../../src'

import { config, refreshToken } from '../config'

describe('search', () => {
  const client = new JikeClient({ ...config, refreshToken })

  it('mediaMeta should work', async () => {
    const url = await client.mediaMeta('6641843b3c283a262733f85a')
    expect(url).to.be.a('string')
  })
  it('searchUserPosts should work', async () => {
    const result = await client.searchPost('深圳吃喝玩乐圈子', {
      lastKey: 10,
    })
    expect(result.length).toBeGreaterThan(0)
  })

  it('searchUsers should work', async () => {
    const result = await client.searchUsers('#逛公园才是正经事', {
      lastKey: 10,
    })
    expect(result.length).toBeGreaterThan(0)
  })
})
