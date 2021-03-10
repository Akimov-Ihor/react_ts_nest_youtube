"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const User_entity_1 = require("./entities/User.entity");
let AppService = class AppService {
    async authorisationGoogleService(req, client) {
        const { token } = req.body;
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.CLIENT_ID,
        });
        const { name, email, picture, sub } = ticket.getPayload();
        const currentUser = await typeorm_1.getRepository(User_entity_1.User)
            .createQueryBuilder()
            .where('email = :email OR google_id = :google_id', {
            email,
            google_id: sub,
        })
            .getOne();
        if (!currentUser) {
            await typeorm_1.getConnection()
                .createQueryBuilder()
                .insert()
                .into(User_entity_1.User)
                .values([{ name, email, picture, google_id: sub }])
                .execute();
        }
        return { name, email, picture };
    }
};
AppService = __decorate([
    common_1.Injectable()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map