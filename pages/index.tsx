import * as React from 'react'
import { InferGetStaticPropsType } from 'next'
import AddPost from '../components/AddPost'
import Post from '../components/Post'
import { IPost } from '../types'
import Head from 'next/head'

const BASE_URL: string = 'http://localhost:3000/api/posts'

export default function IndexPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [postList, setPostList] = React.useState(posts)

  const addPost = async (e: React.FormEvent, formData: IPost) => {
    e.preventDefault()
    const post: IPost = {
      id: Math.random(),
      title: formData.title,
      body: formData.body,
    }
    setPostList([post, ...postList])
  }

  const deletePost = async (id: number) => {
    const posts: IPost[] = postList.filter((post: IPost) => post.id !== id)
    setPostList(posts)
  }

  if (!postList) return <h1>Loading...</h1>

  return (
    <>
      <Head>
        <title>My Posts App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className='container'>
        <h1>List Of The Posts</h1>
        <AddPost savePost={addPost} />
        {postList.map((post: IPost) => (
          <Post key={post.id} deletePost={deletePost} post={post} />
        ))}
      </main>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(BASE_URL)
  const posts: IPost[] = await res.json()

  return {
    props: {
      posts,
    },
  }
}
