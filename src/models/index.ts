export interface Team {
  name: string
  abbr: string
}

export interface Slogan {
  word: string
}

export interface Type {
  text: string
  value: string
  selected: boolean
}

export interface Frame {
  id: string
  image: string
  subtitle: string
  delay: number
  data: ImageData
}

export interface Language {
  text: string
  lan: string
  translating: boolean
  translated: boolean
  copied: boolean
  result: string
}

export const types: Array<Type> = [
  { text: '文字', value: 'text', selected: true },
  { text: '图片', value: 'image', selected: false },
  { text: 'GIF', value: 'gif', selected: false }
]

export const slogans: Array<Slogan> = [
  { word: '总冠军' },
  { word: '一轮游' },
  { word: '黑8' }
]

export const teams: Array<Team> = [
  { name: '老鹰', abbr: 'ATL' },
  { name: '篮网', abbr: 'BKN' },
  { name: '凯尔特人', abbr: 'BOS' },
  { name: '黄蜂', abbr: 'CHA' },
  { name: '公牛', abbr: 'CHI' },
  { name: '骑士', abbr: 'CLE' },
  { name: '独行侠', abbr: 'DAL' },
  { name: '掘金', abbr: 'DEN' },
  { name: '活塞', abbr: 'DET' },
  { name: '勇士', abbr: 'GSW' },
  { name: '火箭', abbr: 'HOU' },
  { name: '步行者', abbr: 'IND' },
  { name: '快船', abbr: 'LAC' },
  { name: '湖人', abbr: 'LAL' },
  { name: '灰熊', abbr: 'MEM' },
  { name: '热火', abbr: 'MIA' },
  { name: '雄鹿', abbr: 'MIL' },
  { name: '森林狼', abbr: 'MIN' },
  { name: '鹈鹕', abbr: 'NOP' },
  { name: '尼克斯', abbr: 'NYK' },
  { name: '雷霆', abbr: 'OKC' },
  { name: '魔术', abbr: 'ORL' },
  { name: '76人', abbr: 'PHI' },
  { name: '太阳', abbr: 'PHX' },
  { name: '开拓者', abbr: 'POR' },
  { name: '国王', abbr: 'SAC' },
  { name: '马刺', abbr: 'SAS' },
  { name: '猛龙', abbr: 'TOR' },
  { name: '爵士', abbr: 'UTA' },
  { name: '奇才', abbr: 'WAS' }
]

export const languages: Array<Language> = [
  {
    text: '英语',
    lan: 'en',
    translating: false,
    translated: false,
    copied: false,
    result: ''
  },
  {
    text: '日语',
    lan: 'jp',
    translating: false,
    translated: false,
    copied: false,
    result: ''
  },

  {
    text: '法语',
    lan: 'fra',
    translating: false,
    translated: false,
    copied: false,
    result: ''
  },
  {
    text: '韩语',
    lan: 'kor',
    translating: false,
    translated: false,
    copied: false,
    result: ''
  },
  {
    text: '西班牙语',
    lan: 'spa',
    translating: false,
    translated: false,
    copied: false,
    result: ''
  }
]
