import { useMutation } from '@tanstack/react-query';
import { authApi } from '@/lib/api';

export const useLogin = () => {
  return useMutation({
    mutationFn: authApi.login,
    onSuccess: (data) => {
      // Simpan token ke localStorage
      localStorage.setItem('token', data.data.token);
      localStorage.setItem('user', JSON.stringify(data.data.user));
    },
  });
};

export const useLogout = () => {
  return useMutation({
    mutationFn: async () => {
      // Hapus token dari localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    },
  });
};