import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getPostBySlug, getAllPosts, PostType } from '../../lib/api';
import Head from 'next/head';
import markdownToHtml from '../../lib/markdownToHtml';
import { Box, Typography } from '@mui/material';
import NavBar from '../../components/organisms/NavBar';
import PostBody from '../../components/organisms/PostBody';
import siteData from '../../data/data.json';

export default function Post({ post }: { post: PostType }) {
  const { title, date, slug, tags, excerpt, content } = post;

  const router = useRouter();
  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <NavBar currentPage={1} />
      {router.isFallback ? (
        <Typography>Loading…</Typography>
      ) : (
        <Box mx={{ xs: 5, md: 40 }} my={10}>
          <Head>
            <title>{title}</title>
            <meta name="robots" content="follow, index" />
            <meta name="description" content={excerpt} />
            <meta property="og:url" content={`${siteData.siteUrl}/${slug}`} />
            <meta property="og:type" content="article" />
            <meta property="og:site_name" content={siteData.siteName} />
            <meta property="og:title" content={title} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={excerpt} />
            <link
              rel="preload"
              href="https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css"
              as="script"
            />
            <link
              href={`https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css`}
              rel="stylesheet"
            />
          </Head>
          <PostBody content={content} title={title} />
        </Box>
      )}
    </>
  );
}

type StaticPropsType = {
  slug: string;
};

export async function getStaticProps({ params }: { params: StaticPropsType }) {
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'tags', 'excerpt', 'content']);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
