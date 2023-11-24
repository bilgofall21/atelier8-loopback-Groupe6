import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbVoitureDataSource} from '../datasources';
import {Voiture, VoitureRelations} from '../models';

export class VoitureRepository extends DefaultCrudRepository<
  Voiture,
  typeof Voiture.prototype.idVoiture,
  VoitureRelations
> {
  constructor(
    @inject('datasources.dbVoiture') dataSource: DbVoitureDataSource,
  ) {
    super(Voiture, dataSource);
  }
}
