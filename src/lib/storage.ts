const storage = {
  get<T>(key: string): T | null {
    const data = localStorage.getItem(key);
    if (data) return JSON.parse(data);
    return null;
  },
  set: (key: string, value: string | object) => {
    localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value));;
  },
  remove: (key: string) => {
    localStorage.removeItem(key);
  }
}

export default storage;