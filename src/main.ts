import { Logger } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './core/app.module'
import { setupGrpc } from './core/bootstrap/grpc'

async function bootstrap() {
	const logger = new Logger()

	const app = await NestFactory.create(AppModule)

	const config = app.get(ConfigService)

	setupGrpc(app, config)

	app.startAllMicroservices()
	app.init()

	logger.log(`Movie service started`)
}
bootstrap()
