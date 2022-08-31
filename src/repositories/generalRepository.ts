import connection from "../dbStrategy/postgres.js";


async function compareUsers(firstUser, secondUser) {
    return connection.query(``)
}

async function usersRanking(firstUser, secondUser) {
    return connection.query(``)
}


const generalRepository = {
    compareUsers,
    usersRanking
  };
  
  export default generalRepository;