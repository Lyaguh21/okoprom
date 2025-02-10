export default interface APIResponse<T> {
    isSuccess: boolean;
    statusCode: number;
    data: T;
  }
  
  //eslint-disable-next-line
  export function generateOKResponse(data: any): APIResponse<any> {
    return {
      isSuccess: true,
      statusCode: 200,
      data: data,
    };
  }
  
  //eslint-disable-next-line
  export function generateBadResponse(data: { type: string }): APIResponse<any> {
    return {
      isSuccess: false,
      statusCode: 400,
      data: data,
    };
  }
  
  export function generateForbiddenResponse(data: {
    type: string;
    //eslint-disable-next-line
  }): APIResponse<any> {
    return {
      isSuccess: false,
      statusCode: 403,
      data: data,
    };
  }
  
  export function generateServerErrorResponse(data: {
    //eslint-disable-next-line
    error: any;
    //eslint-disable-next-line
  }): APIResponse<any> {
    return {
      isSuccess: false,
      statusCode: 500,
      data: data,
    };
  }
  