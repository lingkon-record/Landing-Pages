
export const mockUsers: any[] = [];

export function signup(email: string, password: string, role: string) {
  mockUsers.push({ email, password, role });
  return true;
}

export function login(email: string, password: string) {
  const user = mockUsers.find((u) => u.email === email && u.password === password);
  return user || null;
}
