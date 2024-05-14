import { skip } from 'node:test'
import { describe, expect, it } from 'vitest'
import { api, isSuccess, setApiConfig } from '../../src'
import { config } from '../config'

describe('search should work', () => {
  setApiConfig(config)

  it('integrate should work', async () => {
    const result = await api.search.integrate('深圳吃喝玩乐圈子', {
      limit: 10,
      loadMoreKey: {
        skip: 20,
      },
    })
    expect(isSuccess(result)).toBe(true)
  })

  it('searchUserPosts should work', async () => {
    const result = await api.posts.searchUserPosts('深圳吃喝玩乐圈子', {
      limit: 10,
    })
    expect(isSuccess(result)).toBe(true)
  })

  it('searchUses should work', async () => {
    const result = await api.users.searchUses('深圳吃喝玩乐圈子', {
      limit: 20,
    })
    expect(isSuccess(result)).toBe(true)
  })
})
