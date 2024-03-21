import { IGetUsersControllers, IGetUsersRepository } from "./protocols";

export class GetUsersControllers implements IGetUsersControllers {

    constructor(private readonly getUsersRepository: IGetUsersRepository){}

    async handle() {
        try {
            // validar requisição
            // direcionar chamada para o respository
            const users = await this.getUsersRepository.getUsers()

            return {
                statusCode: 200,
                body: users
            }
        } catch (error) {
            return {
                statusCode: 500,
                body: 'Something went wrong.'
            }
        }

    }
}