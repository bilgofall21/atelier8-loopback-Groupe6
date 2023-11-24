import {Entity, model, property} from '@loopback/repository';

@model()
export class Voiture extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idVoiture?: number;

  @property({
    type: 'string',
    required: true,
  })
  marque: string;

  @property({
    type: 'number',
    required: true,
  })
  prix: number;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'string',
    required: true,
  })
  image: string;


  constructor(data?: Partial<Voiture>) {
    super(data);
  }
}

export interface VoitureRelations {
  // describe navigational properties here
}

export type VoitureWithRelations = Voiture & VoitureRelations;
