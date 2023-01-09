const express = require("express");
const models = require("../models");
const router = express.Router();
const axios =require("axios");
const {SearchedBreeds}=models;
const { Op } = require("sequelize");
router
	.post("/most_search", async (request, response) => {
		
		const breedsInDatabase = await SearchedBreeds.findAll({ order: [["count", "DESC"]] });
		const breeds2=(await axios.get("https://api.thecatapi.com/v1/breeds/")).data;
        const {limit}=request.body;
        const breeds=[];
        for(let i=0; i<limit;i++){
            const breed=breeds2.find((breed)=>breed.id===breedsInDatabase[i].breed_id);
			const image=(await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breed.id}&limit=${1}`)).data;
            breeds.push({...breed,image:image[0]});
        }
		
        return response.status(200).send(breeds);
	})
	.post("/get_breed",async (request, response) => {
		const { id } = request.body;
		const breedFromDb = await SearchedBreeds.findOne({ where: { breed_id: id } });
		const breed=(await axios.get(`https://api.thecatapi.com/v1/breeds/${id}`)).data;
		const images=(await axios.get(`https://api.thecatapi.com/v1/images/search?limit=9&breed_ids=${id}`)).data;
		
		breedFromDb.count = breedFromDb.count + 1;
		await breedFromDb.save();
		return response.status(200).send({breed,images});

	})
	
	.post("/get_names",async (request,response)=>{
		const {text}=request.body;
		const breeds=await SearchedBreeds.findAll({where: {breed_name:{
			[Op.like]: text+"%"
		}}});
		
		return response.status(200).send(breeds);
	})
	.get("/:breedId",async (request,response)=>{
		const breed=(await axios.get("https://api.thecatapi.com/v1/breeds")).data.find((breed)=>breed.id===request.params.breedId);
		const images=(await axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${request.params.breedId}&api_key=REPLACE_ME`)).data;
		return response.status(200).send({breed:breed,images:images});
	})

module.exports = router;
