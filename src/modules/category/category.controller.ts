import type { GetAllCategoriesResponse } from '@microservice-cinema/contracts/gen/ts/category'
import { Controller } from '@nestjs/common'
import { GrpcMethod } from '@nestjs/microservices'

import { CategoryService } from './category.service'

@Controller()
export class CategoryController {
	public constructor(private readonly categoryService: CategoryService) {}

	@GrpcMethod('CategoryService', 'GetAllCategories')
	public async getAll(): Promise<GetAllCategoriesResponse> {
		return await this.categoryService.getAll()
	}
}
