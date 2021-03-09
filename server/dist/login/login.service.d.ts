import { PostUserLoginDto } from './dto/post-user-login.dto';
export declare class LoginService {
    private readonly login;
    create(): string;
    userInfo(body: PostUserLoginDto): string;
}
