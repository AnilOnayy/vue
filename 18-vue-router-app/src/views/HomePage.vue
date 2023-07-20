<template>
    <div class="card p-2 border">
        <button class="btn btn-primary btn-sm ms-auto d-block" @click="$router.push({ name: 'NewBookmarkPage' })"> Add New +
        </button>
        <table class="table table-hover w-100">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">URL</th>
                    <th scope="col">Description</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="bookmark in bookMarks" :key="bookmark">
                    <th scope="row">{{ bookmark.id }}</th>
                    <td>{{ bookmark.title  }}</td>
                    <td>{{ bookmark.url }}</td>
                    <td>{{ bookmark.description  }}</td>
                    <td>
                        <button @click="deleteBookMark(bookmark)" class="btn btn-danger btn-sm">Delete</button>
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
</template>


<script>
export default {
    data()
    {
        return {
            bookMarks :[]
        }
    },
    created(){
        this.$appAxios.get("/bookmarks")
        .then(res => {
            this.bookMarks = res.data || [];
        });
    },

    methods :{
        deleteBookMark(bookmark)
        {
            this.$appAxios.delete(`/bookmarks/${bookmark.id}`)
            .then(res => {
                this.bookMarks = this.bookMarks.filter(b => b.id !== bookmark.id);
                console.log(res);
            });
        }
    }
}
</script>