'use strict';
const models = require('../models');
const {SearchedBreeds}=models;
const axios=require('axios')
module.exports = {
  async up (queryInterface, Sequelize) {
    try{
        const breeds=(await axios.get("https://api.thecatapi.com/v1/breeds")).data;
       
        for(let i=0; i<breeds.length;i++){
            
            await SearchedBreeds.create({
                breed_id:breeds[i].id,
                breed_name:breeds[i].name,
                count:0
            })
        }
    
  }catch(e){
    console.log(e);
  }
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
