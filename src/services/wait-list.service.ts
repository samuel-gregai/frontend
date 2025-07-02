import { waitListInstance } from "@/lib/axios";
import { AxiosError } from "axios";

export const RegisterInterestHandler = async (email: string) => {
  try {
    const response = await waitListInstance.post("/api/v1/wait-list/register", { email });
    if (response.status >= 200 && response.status < 300) {
      return {
        success: true,
        message: response.data?.message || "Successfully registered!",
        data: response.data,
      };
    }
    return {
      success: false,
      message: "Unexpected response from server",
    };
  } catch (error) {
    const err = error as AxiosError<any>;
    if (err.response) {
      const { status, data } = err.response;
      if (status === 404 && data.message) {
        return {
          success: false,
          message: data.message,
        };
      }
      return {
        success: false,
        message: data?.message || "An error occurred during registration.",
      };
    }
    return {
      success: false,
      message: "Network error. Please try again.",
    };
  }
};