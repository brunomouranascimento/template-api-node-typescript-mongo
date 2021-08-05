declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE: string
      PORT: number
      NODE_ENV: string
      JWT_SECRET: string
    }
  }
}
export {}
