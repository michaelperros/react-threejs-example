import { proxy } from 'valtio'
import { useProxy } from 'valtio/utils'

// global reactive state
const store = proxy({
  entered: true,
  darkmode: false,
  decalUrl: '',
  material: '',
  nodeToyUrl: '',
  loaded: false,
})
export const useStore = () => useProxy(store)
