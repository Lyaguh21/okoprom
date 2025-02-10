import APIResponse from "./Utils/responseUtils";

export default class ApiClient {
  async get<TResult>(endpoint: string): Promise<APIResponse<TResult>> {
    const response = await fetch(endpoint, {
      method: "GET",
    });

    return await response.json();
  }

  async post<TBody, TResult>(
    endpoint: string,
    body: TBody
  ): Promise<APIResponse<TResult>> {
    const response = await fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(body),
    });

    return await response.json();
  }

  async postFormData<TResult>(
    endpoint: string,
    body: FormData
  ): Promise<APIResponse<TResult>> {
    const response = await fetch(endpoint, {
      method: "POST",
      body: body,
    });

    return await response.json();
  }

  async delete<TBody, TData>(
    endpoint: string,
    body: TBody
  ): Promise<APIResponse<TData>> {
    const response = await fetch(endpoint, {
      method: "DELETE",
      body: JSON.stringify(body),
    });

    return await response.json();
  }
  async patch<TBody, TResult>(
    endpoint: string,
    body: TBody
  ): Promise<APIResponse<TResult>> {
    const response = await fetch(endpoint, {
      method: "PATCH",
      body: JSON.stringify(body),
    });

    return await response.json();
  }

  /*async put<T>(endpoint: string, body: T) {}*/
}
