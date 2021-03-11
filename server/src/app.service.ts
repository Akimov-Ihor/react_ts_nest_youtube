import { Injectable } from '@nestjs/common';
import { getConnection, getRepository } from 'typeorm';
import { User } from './entities/User.entity';

import { OAuth2Client } from 'google-auth-library';
const client = new OAuth2Client(process.env.CLIENT_ID);

@Injectable()
export class AppService {
  async authorisationGoogleService({ token }): Promise<any> {
    const ticket = await client.verifyIdToken({ idToken: token });

    const { name, email, picture, sub } = ticket.getPayload();
    const currentUser = await getRepository(User)
      .createQueryBuilder()
      .where('email = :email OR google_id = :google_id', {
        email,
        google_id: sub,
      })
      .getOne();
    if (!currentUser) {
      await getConnection()
        .createQueryBuilder()
        .insert()
        .into(User)
        .values([{ name, email, picture, google_id: sub }])
        .execute();
    }
    return { name, email, picture };
  }
}
