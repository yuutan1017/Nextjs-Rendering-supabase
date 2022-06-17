import { ReactNode } from 'react'

export interface Title {
  title: string
  children: ReactNode
}

export interface Task {
  id: string
  created_at: string
  title: string
  user_id: string | undefined
}

export interface Notice {
  id: string
  created_at: string
  content: string
  user_id: string | undefined
}

export interface StaticProps {
  tasks: Task[]
  notices: Notice[]
}
