import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async autorizationGoogleServiese(req, client): Promise<any> {
    const { token } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.CLIENT_ID,
    });

    const { name, email, picture } = ticket.getPayload();

    return { name, email, picture };
  }
}
