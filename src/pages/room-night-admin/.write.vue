<template>
    <div>
        <trip-debugger 
            title="updateBaseTokenURI"
            className="roomNightAdmin"
            functionName="updateBaseTokenURI"
            :parameters="[{key: 'uri', value: 'test'}]">
        </trip-debugger>
        <trip-debugger 
            title="addVendor"
            className="roomNightAdmin"
            functionName="addVendor"
            :parameters="[{key: 'address', value: '0x49F405e17aea89AA9CA060c62c81ac7CFB45e77a'}, {key: 'name', value: 'test'}]">
        </trip-debugger>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                tripio: null
            };
        },
        created(){

        },
        async mounted() {
        },
        methods: {
        }
    }
</script>
<style lang="scss">
</style>