<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Post</h3>
            
            <h1> {{item.title}}</h1>
            <h3>BY: {{item.author}}</h3>
            <h3>DATE: {{item.date}}</h3>
            <p> {{item.content}}</p>
    
            

        
            
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


        }
    }
</script>