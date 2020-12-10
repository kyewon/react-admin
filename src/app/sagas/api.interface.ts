export interface IRequest {
}

export interface IResponse {
	// result: string, // 성공, 실패
  // msg: string, // 메시지 내용
  data: any
}

export interface IError {
  message: string
}