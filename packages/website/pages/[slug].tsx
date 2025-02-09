import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next'

import { getPageRepository } from '@pkg/database/repositories/pages/getPageRepository'
import { toSortedIndex } from '@pkg/database/repositories/pages/toSortedIndex'
import { Entry, PageEntry } from '@pkg/database/repositories/pages/types'

import ArticlePageView from '#/features/pages/views/ArticlePageView'

export function getStaticPaths(): GetStaticPathsResult {
  const paths = toSortedIndex(getPageRepository().getAll()).map((page: Entry) => ({
    params: {
      slug: page.slug,
    },
  }))

  return {
    paths: paths,
    fallback: false,
    // fallback=false: show the default 404 page
    // fallback=true: delegate the fallback to getStaticProps (e.g. checking if entry is null)
  }
}

export function getStaticProps(ctx: GetStaticPropsContext): GetStaticPropsResult<any> {
  const slug = ctx.params?.slug as string
  return getPageRepository().getStaticProps(slug, 60 * 15)
}

const page = ({ entry }: { entry: PageEntry | null }) => {
  return <ArticlePageView entry={entry} />
}

export default page
