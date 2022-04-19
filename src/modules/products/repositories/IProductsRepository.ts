import { Product } from '@prisma/client';
import { ICreateProductDTO } from '../dtos/ICreateProductDTO';

interface IProductsRepository {
  create({ title, quantity }: ICreateProductDTO): Promise<Product>;
  findBySlug(slug: string): Promise<Product>;
  listAllProducts(): Promise<Product[]>;
  delete(id: string): Promise<Product>;
  update(id: string, title: string, quantity: number): Promise<Product>;
}

export { IProductsRepository };