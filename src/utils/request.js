import axios from 'axios'
// 创建axios实例
const service = axios.create({
	baseURL: "", // api 的 base_url
	timeout: 50000 // 请求超时时间
})
// response 拦截器
service.interceptors.response.use(
	response => {
		const res = response.data
    return response
	},
	error => {
		console.error('err' + error) // for debug
		return Promise.reject(error)
	}
)

export default service
