import * as api from '../../utils/api'
import { getUsersFromApi } from '../actions/tableActions'
import bigData from '../../data/bigData.json'
import smallData from '../../data/smallData.json'

export const fetchUsers = (dataSize) => {
	// const link =
	// 	dataSize === 'small'
	// 		? api.smallDataLink
	// 		: dataSize === 'big'
	// 		? api.bigDataLink
	// 		: null
	// return (dispatch) => {
	// 	fetch(link)
	// 		.then((response) => response.json())
	// 		.then((json) => dispatch(getUsersFromApi(json)))
	// }
	// !!!!!!!!!!!!!!!!!! ВЫШЕ ЛОГИКА ДЛЯ ОТПРАВКИ ЗАПРОСОВ НА СЕРВЕР НА 6.11.2021 FILLTEXT.COM ЛЕЖИТ
	// !!!!!!!!!!!!!!!!!! ТАКЖЕ ВЕРОЯТНО КОД ЗАКОММЕНТИРОВАН ИЗ-ЗА КОНФЛИКТА С CORS ИБО FILLTEXT.COM НЕ ИМЕЕТ СЕРТИФИКАТА

	const data = //получение даннных локально из-за причин, указанных выше
		dataSize === 'small' ? smallData : dataSize === 'big' ? bigData : null
	return (dispatch) => {
		dispatch(getUsersFromApi(data))
	}
}
