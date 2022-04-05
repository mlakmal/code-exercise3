export interface IHttpRequest<T = unknown> {
  url: string;
  method: 'POST' | 'GET' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  datas?: T;
}

export interface IHttpResponse<T = unknown> {
  data: T;
  status: number;
}

export class HttpClient {
  public static async request<T>(
    request: IHttpRequest
  ): Promise<IHttpResponse<T>> {
    const response = await window.fetch(request.url, {
      method: request.method,
      headers: request.headers,
      body: request.datas ? JSON.stringify(request.datas) : undefined,
    });

    return {
      data: await response.json(),
      status: response.status,
    };
  }
}
