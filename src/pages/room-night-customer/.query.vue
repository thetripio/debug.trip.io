<template>
    <div>
        <trip-debugger 
            title="name"
            className="roomNightCustomer"
            functionName="name"
            :parameters="[]">
        </trip-debugger>
        <trip-debugger 
            title="symbol"
            className="roomNightCustomer"
            functionName="symbol"
            :parameters="[]">
        </trip-debugger>
        <trip-debugger 
            title="tokenURI"
            className="roomNightCustomer"
            functionName="tokenURI"
            :parameters="[{key: 'tokenId', value: 1}]">
        </trip-debugger>
    </div>
</template>
<script>
    export default {
        data(){
            return { };
        }
    }
</script>
<style lang="scss">
</style>