const storage = {
  get<T>(key: string): T | string | null {
    const data = localStorage.getItem(key);
    try {
      if (data) return JSON.parse(data);
      throw new Error('값이 존재하지 않습니다.');
    } catch(e) {
      return data;
    }
    
  },
  set: (key: string, value: string | object) => {
    localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));;
  },
  remove: (key: string) => {
    localStorage.removeItem(key);
  }
}

export default storage;