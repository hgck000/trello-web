import axios from 'axios'
import { API_ROOT } from '~/utils/constants'

export const fetchBoarDeatilsAPI = async (boardId) => {
  const response = await axios.get(`${API_ROOT}/v1/boards/${boardId}`)
  // Axios sẽ trả kết quả về qua property của nó là data
  return response.data
}
