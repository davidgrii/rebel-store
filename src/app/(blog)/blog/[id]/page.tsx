'use client'

import { useRouter } from 'next/router'
import React from 'react'

export default function PostPage() {
  const router = useRouter()
  const { id } = router.query

  if (!id) {
    return <div>Загрузка...</div> // Пока id не доступен (например, при первом рендере)
  }

  return (
    <div>
      <h1>Пост {id}</h1>
      <p>Здесь будет контент поста с id: {id}</p>
    </div>
  )
}
