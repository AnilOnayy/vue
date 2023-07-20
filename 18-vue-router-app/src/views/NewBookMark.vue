<template>
    <div class="form-area card border p-2" >
            <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input type="text" v-model="userData.title" class="form-control" id="title" placeholder="Bookmark Title">
            </div>
            <div class="mb-3">
                <label for="Url" class="form-label">Url</label>
                <input type="url" v-model="userData.url" class="form-control" id="Url" placeholder="Bookmark Url">
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea name="description" v-model="userData.description" id="description" cols="20" rows="4"
                    class="form-control"></textarea>
            </div>

            <div class="d-flex justify-content-end align-itmes-center">
                <button @click="$router.push({ name: 'HomePage' })" type="button" class="btn  btn-secondary me-3">Reset
                </button>
                <button @click="onSave" class="btn  btn-primary">Submit</button>
            </div>
    </div>
</template>


<script>


export default {
    data() {
        return {
            userData: {
                title: "",
                url: "",
                description: "",
            }
        }
    },


    methods: {
        onSave() {
            this.$appAxios.post("/bookmarks",this.userData)
            .then(() => {
                this.$router.push({name:"HomePage"});
                this.resetData();
            })
        },
        resetData(){
            Object.keys(this.userData).forEach(key => this.userData[key] = null);
        }
    }
}
</script>