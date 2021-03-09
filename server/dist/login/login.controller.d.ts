import { PostUserLoginDto } from './dto/post-user-login.dto';
import { LoginService } from './login.service';
export declare class LoginController {
    readonly LoginService: LoginService;
    constructor(LoginService: LoginService);
    getOne(id: string): string;
    postLoginAndPassword(PostUserLoginDto: PostUserLoginDto): Promise<void>;
}
