import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbVoitureDataSource} from '../datasources';
import {User, UserRelations} from '../models';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.userId,
  UserRelations
> {
  constructor(
    @inject('datasources.dbVoiture') dataSource: DbVoitureDataSource,
  ) {
    super(User, dataSource);
  }
}
