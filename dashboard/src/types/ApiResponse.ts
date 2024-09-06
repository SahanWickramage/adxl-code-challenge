type ApiResponse<T = unknown> = {
    success: boolean;
    message: string | null;
    data: T | null;
}

export type { ApiResponse };