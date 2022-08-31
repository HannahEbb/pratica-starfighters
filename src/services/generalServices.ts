import { generalRepository } from "../repositories/generalRepository.js";

export async function compare(firstUser, secondUser) {
   
    const result = await generalRepository.compareUsers(firstUser, secondUser);
    if(result.rowCount === 0) {
        throw {code: 'NotFound', message: ''}
        }
    return result;
  }

  export async function ranking() {
   
    const result = await generalRepository.usersRanking();
    if(result.rowCount === 0) {
      throw {code: 'NotFound', message: ''}
    }
   return result;
}