
import { compare, ranking } from "./services/generalServices.js";

export async function compareStars(req, res) {
    const { firstUser, secondUser } = req.body;
    
    try {
        const result = compare(firstUser, secondUser) 
        return res.status(202).send(result)
      }
     catch (error) {
      console.log(error);
      return res.sendStatus(500); 
    }
    
  }

  export async function readRanking(req, res) {
    
    try {
        const result = ranking() 
        return res.status(202).send(result)
      }
     catch (error) {
      console.log(error);
      return res.sendStatus(500); 
    }
    
  }