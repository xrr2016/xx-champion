import yilunyou000 from '../assets/images/yilunyou/000.png'
import yilunyou001 from '../assets/images/yilunyou/001.png'
import yilunyou002 from '../assets/images/yilunyou/002.png'
import yilunyou003 from '../assets/images/yilunyou/003.png'
import yilunyou004 from '../assets/images/yilunyou/004.png'
import yilunyou005 from '../assets/images/yilunyou/005.png'
import yilunyou006 from '../assets/images/yilunyou/006.png'
import yilunyou007 from '../assets/images/yilunyou/007.png'
import yilunyou008 from '../assets/images/yilunyou/008.png'
import yilunyou009 from '../assets/images/yilunyou/009.png'
import './image'
import { Frame } from './index'

const meta = {
  teamName: '老鹰',
  teamNameIndex: 0
}

const subtitles: Array<any> = [
  {
    word: '老鹰队',
    start: 0,
    end: 2,
    length: 3
  },
  {
    word: '一轮游',
    start: 3,
    end: 9,
    length: 7
  }
]

const frames: Array<Frame> = [
  {
    id: 'yilunyou000',
    delay: 160,
    image: yilunyou000,
    subtitle: '老鹰队',
    data: new ImageData(1, 1)
  },
  {
    id: 'yilunyou001',
    delay: 160,
    image: yilunyou001,
    subtitle: '老鹰队',
    data: new ImageData(1, 1)
  },
  {
    id: 'yilunyou002',
    delay: 160,
    image: yilunyou002,
    subtitle: '老鹰队',
    data: new ImageData(1, 1)
  },
  {
    id: 'yilunyou003',
    delay: 160,
    image: yilunyou003,
    subtitle: '一轮游',
    data: new ImageData(1, 1)
  },
  {
    id: 'yilunyou004',
    delay: 160,
    image: yilunyou004,
    subtitle: '一轮游',
    data: new ImageData(1, 1)
  },
  {
    id: 'yilunyou005',
    delay: 160,
    image: yilunyou005,
    subtitle: '一轮游',
    data: new ImageData(1, 1)
  },
  {
    id: 'yilunyou006',
    delay: 160,
    image: yilunyou006,
    subtitle: '一轮游',
    data: new ImageData(1, 1)
  },
  {
    id: 'yilunyou007',
    delay: 160,
    image: yilunyou007,
    subtitle: '一轮游',
    data: new ImageData(1, 1)
  },
  {
    id: 'yilunyou008',
    delay: 160,
    image: yilunyou008,
    subtitle: '一轮游',
    data: new ImageData(1, 1)
  },
  {
    id: 'yilunyou007',
    delay: 160,
    image: yilunyou009,
    subtitle: '一轮游',
    data: new ImageData(1, 1)
  }
]

export default {
  meta,
  frames,
  subtitles
}
