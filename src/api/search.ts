import { request, toResponse } from '../request'
import type {
  LoadMoreKey,
  OriginalPost,
  SectionInfo,
  Topic,
  User,
} from '../types/entity'
import type { PaginationOption } from '../types/options'
import type { SearchResponse } from '../types/api-responses'

/**
 * 搜索综合
 *
 */
export const integrate = <
  T = SearchResponse<SectionInfo | Topic | OriginalPost | User>,
>(
  keywords?: string,
  option: PaginationOption<LoadMoreKey> = {},
) =>
  toResponse<T>(
    request.post('1.0/search/integrate', {
      json: {
        keywords: keywords ?? '',
        limit: option.limit ?? 10,
        loadMoreKey: option.loadMoreKey,
      },
    }),
  )
