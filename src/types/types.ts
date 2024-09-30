export type UserMovieType = {
  userName: string
  name: string
  genre: string
  year: string
  length: string
  isSeries: boolean
  image: string
  rating: { imdb: string; kp: string }
}

export type ServerMovieType = {
  genre: string
  id: number
  image: string
  isSeries: boolean
  length: string
  name: string
  rating: { imdb: string; kp: string }
  userName: string
  user_id: number
  year: string
}
