export const useUserStore = () => {
    return useState('user', () => ({
      name: '',  
    }));
  };