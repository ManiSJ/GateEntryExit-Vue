<template>
<div class="container">
  <div class="row">
    <div class="col-md-6">
    
      <form @submit.prevent="createUpdateGate">
        <div class="input-group mb-3">
          <input type="text" required class="form-control" placeholder="Enter gate name" v-model="gateName">
          <div class="input-group-append">
            <button type="submit" class="btn btn-primary">Create/Update</button>
          </div>        
        </div>
      </form>

      <table class="mt-5 table table-striped">
        <thead><tr><th>Actions</th><th>Name</th></tr></thead>
        <tbody><tr v-for="(gate, index) in gates" :key="index">
        <td><button class="btn btn-primary" @click="editGate(gate.id)">Edit</button>
        <button class="mx-2 btn btn-danger" @click="deleteGate(gate.id)">Delete</button></td>
        <td>{{gate.name}}</td></tr></tbody>
      </table>

      <nav>
          <ul class="pagination justify-content-end">
          <li class="page-item" v-for="(pageNumber, index) in gatesTotalCountArray" :key="index">
            <a class="page-link" @click="getGatesByPagination(pageNumber)">{{pageNumber}}</a>
          </li>
          </ul>
      </nav>

    </div>
  </div>
</div>
 
</template>

<script>
import axios from 'axios'

export default {
  name: 'GatesComponent',
  data() {
    return {
      api_url : "http://localhost:5058",
      maxResultCount : 5,
      gateName : "",
      gates : [],
      gatesTotalCount : 0,
      gateId : null
    }
  },
  created() {
    this.getGates(this.maxResultCount, 0, "");
  },
   computed: {
    gatesTotalCountArray() {
      return this.generateTotalCountArray();
    }
  },
  methods : {
    getGates(maxCount, skipNumber, filterText){     
     axios.post(`${this.api_url}/api/gate/getAll`, 
     { maxResultCount : maxCount, skipCount : skipNumber, sorting : filterText}).then(response =>{
      this.gates = response.data.items;
      this.gatesTotalCount = response.data.totalCount;
     });      
    },
    getGatesByPagination(pageNumber){
      const skipcount = (pageNumber - 1) * this.maxResultCount;
      this.getGates(this.maxResultCount, skipcount, "");
    }, 
    generateTotalCountArray() {
       const totalCount = Math.ceil(this.gatesTotalCount / this.maxResultCount);
        const array = [];
        for (let i = 1; i <= totalCount; i++) {
          array.push(i);
        }
        return array;      
    },
    createUpdateGate(){
      if(this.gateId){
        axios.post(this.api_url + '/api/gate/edit' , { id: this.gateId, name : this.gateName}).then(() => {
          this.getGates(this.maxResultCount, 0, "");
          this.gateId = null;
          this.gateName = "";
        });
      }
      else{
        axios.post(this.api_url + '/api/gate/create',  { name : this.gateName}).then(() =>{
          this.getGates(this.maxResultCount, 0, "");
          this.gateName = "";
        });
      }      
    },
    editGate(id){
      axios.post(`${this.api_url}/api/gate/getById/${id}`).then(response =>{
        console.log(response)
        this.gateId = response.data.id;
        this.gateName = response.data.name;
      });
    },
    deleteGate(id){
      axios.delete(`${this.api_url}/api/gate/delete/${id}`).then(() => {
        this.getGates(this.maxResultCount, 0, "");
      });
    }
  }
}
</script>

<style></style>