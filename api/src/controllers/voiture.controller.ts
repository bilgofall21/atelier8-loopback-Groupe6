import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Voiture} from '../models';
import {VoitureRepository} from '../repositories';

export class VoitureController {
  constructor(
    @repository(VoitureRepository)
    public voitureRepository : VoitureRepository,
  ) {}

  @post('/voitures')
  @response(200, {
    description: 'Voiture model instance',
    content: {'application/json': {schema: getModelSchemaRef(Voiture)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Voiture, {
            title: 'NewVoiture',
            exclude: ['idVoiture'],
          }),
        },
      },
    })
    voiture: Omit<Voiture, 'idVoiture'>,
  ): Promise<Voiture> {
    return this.voitureRepository.create(voiture);
  }

  @get('/voitures/count')
  @response(200, {
    description: 'Voiture model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Voiture) where?: Where<Voiture>,
  ): Promise<Count> {
    return this.voitureRepository.count(where);
  }

  @get('/voitures')
  @response(200, {
    description: 'Array of Voiture model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Voiture, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Voiture) filter?: Filter<Voiture>,
  ): Promise<Voiture[]> {
    return this.voitureRepository.find(filter);
  }

  @patch('/voitures')
  @response(200, {
    description: 'Voiture PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Voiture, {partial: true}),
        },
      },
    })
    voiture: Voiture,
    @param.where(Voiture) where?: Where<Voiture>,
  ): Promise<Count> {
    return this.voitureRepository.updateAll(voiture, where);
  }

  @get('/voitures/{id}')
  @response(200, {
    description: 'Voiture model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Voiture, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Voiture, {exclude: 'where'}) filter?: FilterExcludingWhere<Voiture>
  ): Promise<Voiture> {
    return this.voitureRepository.findById(id, filter);
  }

  @patch('/voitures/{id}')
  @response(204, {
    description: 'Voiture PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Voiture, {partial: true}),
        },
      },
    })
    voiture: Voiture,
  ): Promise<void> {
    await this.voitureRepository.updateById(id, voiture);
  }

  @put('/voitures/{id}')
  @response(204, {
    description: 'Voiture PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() voiture: Voiture,
  ): Promise<void> {
    await this.voitureRepository.replaceById(id, voiture);
  }

  @del('/voitures/{id}')
  @response(204, {
    description: 'Voiture DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.voitureRepository.deleteById(id);
  }
}
