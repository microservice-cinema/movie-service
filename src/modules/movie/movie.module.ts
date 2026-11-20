import { Module } from '@nestjs/common'

import { MovieController } from './movie.controller'
import { MovieRepository } from './movie.repository'
import { MovieService } from './movie.service'

@Module({
	controllers: [MovieController],
	providers: [MovieService, MovieRepository],
	exports: [MovieService]
})
export class MovieModule {}
