export interface ResourceHero {
  [id: string]: {
    id: number
    name: string
    img: string
    icon: string
  }
}

export interface ResourceGameMode {
  [id: string]: {
    id: number
    name: string
    balanced: boolean
  }
}
