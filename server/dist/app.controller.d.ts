import { AppService } from './app.service';
export declare class AppController {
    private readonly AppService;
    constructor(AppService: AppService);
    authorizeGoogle(req: any): Promise<any>;
}
