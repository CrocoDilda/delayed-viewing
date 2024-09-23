export type UserMovieType = {
  userName: string
  name: string
  genre: string
  year: string
  length: string
  isSeries: boolean
  image: string
  rating: Array<{ imdb: string; kp: string }>
}
