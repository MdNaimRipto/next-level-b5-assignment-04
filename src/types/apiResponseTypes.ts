export interface IApiErrorResponse {
  data: {
    success: boolean;
    statusCode: number;
    message: string;
    errorMessages: Array<{
      path: string;
      message: string;
    }>;
  };
}

export interface IApiSuccessResponse {
  data: unknown;
  message: string;
  statusCode: number;
  success: boolean;
}

export interface IFilterApiSuccessResponse {
  message: string;
  statusCode: number;
  success: boolean;
  data: {
    data: unknown;
    meta: {
      page: number;
      limit: number;
      total: number;
    };
  };
}
