<template>
    <div class="home">
        <h2>RoomNightVendor</h2>
        <md-tabs md-sync-route>
            <md-tab id="tab-home" md-label="Query">
                <query></query>
            </md-tab>

            <md-tab id="tab-pages" md-label="Write">
                <write></write>
            </md-tab>
        </md-tabs>
    </div>
</template>
<script>
    import query from './.query.vue'
    import write from './.write.vue'
    export default {
        components: { query, write },
        data(){
            return {
                tripio: null
            };
        },
        created(){

        },
        mounted() {
        },
        methods: {
        }
    }
</script>
<style lang="scss">
</style>