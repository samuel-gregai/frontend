import { authInstance } from "@/lib/axios";
import { AxiosError } from "axios";
import { SigninType, SignupType } from "@/types";
const baseURL = process.env.NEXT_PUBLIC_BASE_URL

export const signinHandler = async (userCredentials: SigninType) => {
    try {
      const response = await authInstance.post("/api/v1/auth/login", userCredentials);
      if (response.status === 200) {
        localStorage.setItem("access_token", response.data.data.token)
        return {
          success: true,
          message: "Login successful",
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
            message: data.message || "No account found",
          };
        }
  
        return {
          success: false,
          message: data?.message || "An error occurred during sign in.",
        };
      }
  
      console.error("Sign-in error:", error);
      return {
        success: false,
        message: "Network error. Please try again.",
      };
    }
  };

  export const signupHandler = async (userCredentials: SignupType) => {
    try {
      const response = await authInstance.post("/api/v1/auth/register", userCredentials);
  
      if (response.status === 200 || response.status === 201) {
        return {
          success: true,
          message: response.data?.message || "Signup successful",
          data: response.data,
        };
      }
  
      return {
        success: false,
        message: "Unexpected server response.",
      };
    } catch (error) {
      const err = error as AxiosError<any>;
  
      if (err.response) {
        const { data, status } = err.response;
  
        return {
          success: false,
          message: data?.message || `Signup failed with status ${status}.`,
        };
      }
  
      console.error("Signup error:", error);
      return {
        success: false,
        message: "Network error. Please try again.",
      };
    }
  };

export const logoutHandler = async () => {
  try {
    const access_token = localStorage.getItem("access_token"); 
    const response = await authInstance.post("/api/v1/auth/logout", { access_token }); 
    if (response.status === 200 || response.status === 201) {
      return {
        success: true,
        message: response.data?.message || "logout successful",
        data: response.data,
      };
    }
    return {
      success: false,
      message: "Unexpected server response.",
    };

  } catch (error) {
    console.error("logoutHandler error:", error);
    const err = error as AxiosError<any>;
    if (err.response) {
      const { data, status } = err.response;

      return {
        success: false,
        message: data?.message || `logout failed with status ${status}.`,
      };
    }

    return {
      success: false,
      message: "Network error. Please try again.",
    };
  }
}
  export const oauthHandler = async (provider: string) => {
    window.location.href = `${baseURL}/api/v1/auth/login/${provider}`
  };

export const forgotPasswordHandler = async (email:Pick<SigninType, "email">) => {
  try {
    const response = await authInstance.post("/api/v1/auth/forgot-password", email)
    if (response.status === 200 || response.status === 201) {
      return {
        success: true,
        message: response.data?.message || "Kindly check your email for password reset link",
        data: response.data,
      };
    }

    return {
      success: false,
      message: "Unexpected server response.",
    };

  } catch (error) {
    
  }
}