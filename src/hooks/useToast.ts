import { toast } from "sonner";

export const useToast = () => {
  const showSuccess = (message: string, description?: string) => {
    toast.success(message, { description });
  };

  const showError = (message: string, description?: string) => {
    toast.error(message, { description });
  };

  const showInfo = (message: string, description?: string) => {
    toast(message, { description });
  };

  return { showSuccess, showError, showInfo };
};
