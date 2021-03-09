import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    authorizeGoogle(req: any): Promise<{
        name: string;
        email: string;
        picture: string;
    }>;
}
