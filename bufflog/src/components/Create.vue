<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Add Item</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addItem">
                    
                     <div class="form-group">
                        <label>Title:</label>
                        <input type="text" class="form-control" v-model="item.title"/>
                    </div>
                     <div class="form-group">
                        <label>author:</label>
                        <input type="text" class="form-control" v-model="item.author"/>
                    </div>
                     <div class="form-group">
                        <label>Date:</label>
                        <input type="text" class="form-control" v-model="item.date"/>
                    </div>
                     <div class="form-group">
                        <label>Content:</label>
                        <input type="text" class="form-control" v-model="item.content"/>
                    </div>

                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Add Item"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  components: {
      name: 'AddItem'
  },
  data() {
      return {
          item: {}
      }
  },
  methods: {
      addItem() {
           let uri = 'http://localhost:4000/items/add';
            this.axios.post(uri, this.item).then(response => console.log(response.data));
        }
    }
}
</script>