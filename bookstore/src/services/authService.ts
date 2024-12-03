<<<<<<< HEAD
=======
// src/services/authService.ts
>>>>>>> 98255963902351c7f32bb23488637188827a2905
import { UserRepository } from "../repositories/userRepository";
import {
  hashPassword,
  comparePassword,
  createSession,
} from "../helpers/validationHelper";

export class AuthService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

<<<<<<< HEAD
=======
  // Criação de novo usuário com senha hashed
>>>>>>> 98255963902351c7f32bb23488637188827a2905
  async registerUser(name: string, email: string, password: string) {
    const passwordHash = hashPassword(password);
    const user = await this.userRepository.addUser(name, email, passwordHash);
    return user;
  }

<<<<<<< HEAD
=======
  // Login de usuário
>>>>>>> 98255963902351c7f32bb23488637188827a2905
  async loginUser(email: string, password: string) {
    const user = await this.userRepository.getUserByEmail(email);
    if (!user) throw new Error("Usuário não encontrado");

    const isPasswordValid = comparePassword(password, user.passwordHash);
    if (!isPasswordValid) throw new Error("Senha incorreta");

<<<<<<< HEAD
    createSession(user.id);
=======
    createSession(user.id); // Cria a sessão
>>>>>>> 98255963902351c7f32bb23488637188827a2905
    return user;
  }
}
