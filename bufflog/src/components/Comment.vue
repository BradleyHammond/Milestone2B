<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Edit Comment</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="updateItem">
                   
                    
                     <div class="form-group">
                        <label>Comment:</label>
                        <input type="text" class="form-control" v-model="item.comment"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Update Comment"/>
                    </div>

                    <div>
                        <button class="btn btn-danger"  v-on:click="item.comment= null">Delete all comments</button>
                    </div>
                   <!--  <div>
                        <button class="btn btn-danger"  v-on:click="item.comment.pop([0])">Delete 1 comment</button>
                    </div> -->
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default{
        data(){
            return{
                item:{}
            }
        },

        created: function(){
            this.getItem();
        },

        methods: {
            getItem()
            {
              let uri = 'http://localhost:4000/items/edit/' + this.$route.params.id;
                this.axios.get(uri).then((response) => {
                    this.item = response.data;
                });
            },

            updateItem()
            {
              let uri = 'http://localhost:4000/items/update/' + this.$route.params.id;
                this.axios.post(uri, this.item).then((response) => {
                  this.$router.push({name: 'Index'});
                });
            }
        }
    }
</script>
