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
import {Ecom} from '../models';
import {EcomRepository} from '../repositories';

export class EcomController {
  constructor(
    @repository(EcomRepository)
    public ecomRepository : EcomRepository,
  ) {}

  @post('/ecoms')
  @response(200, {
    description: 'Ecom model instance',
    content: {'application/json': {schema: getModelSchemaRef(Ecom)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ecom, {
            title: 'NewEcom',
            exclude: ['_id'],
          }),
        },
      },
    })
    ecom: Omit<Ecom, '_id'>,
  ): Promise<Ecom> {

    return this.ecomRepository.create(ecom);
  }

  @get('/ecoms/count')
  @response(200, {
    description: 'Ecom model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Ecom) where?: Where<Ecom>,
  ): Promise<Count> {
    return this.ecomRepository.count(where);
  }

  @get('/ecoms')
  @response(200, {
    description: 'Array of Ecom model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Ecom, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Ecom) filter?: Filter<Ecom>,
  ): Promise<Ecom[]> {
    return this.ecomRepository.find(filter);
  }

  


  @patch('/ecoms')
  @response(200, {
    description: 'Ecom PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ecom, {partial: true}),
        },
      },
    })
    ecom: Ecom,
    @param.where(Ecom) where?: Where<Ecom>,
  ): Promise<Count> {
    return this.ecomRepository.updateAll(ecom, where);
  }

  @get('/ecoms/{id}')
  @response(200, {
    description: 'Ecom model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Ecom, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Ecom, {exclude: 'where'}) filter?: FilterExcludingWhere<Ecom>
  ): Promise<Ecom> {
    return this.ecomRepository.findById(id, filter);
  }

  @patch('/ecoms/{id}')
  @response(204, {
    description: 'Ecom PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ecom, {partial: true}),
        },
      },
    })
    ecom: Ecom,
  ): Promise<void> {
    await this.ecomRepository.updateById(id, ecom);
  }

  @put('/ecoms/{id}')
  @response(204, {
    description: 'Ecom PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() ecom: Ecom,
  ): Promise<void> {
    await this.ecomRepository.replaceById(id, ecom);
  }

  @del('/ecoms/{id}')
  @response(204, {
    description: 'Ecom DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.ecomRepository.deleteById(id);
  }
}
