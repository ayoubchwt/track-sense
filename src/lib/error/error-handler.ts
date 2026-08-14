import { ApiError } from "next/dist/server/api-utils";

export function HandleError(error: unknown) {
  if (error instanceof ApiError)
    return {
      error: error.message,
      status: error.statusCode,
    };
  return {
    error: "Unknown Server Error",
    status: 500,
  };
}
