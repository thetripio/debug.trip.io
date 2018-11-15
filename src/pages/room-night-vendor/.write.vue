<template>
    <div>
        <trip-debugger 
            title="updatePrices"
            className="roomNightVendor"
            functionName="updatePrices"
            :parameters="[{key: 'rpid', value: 1}, {key: 'dates', value: '20181111', type: 'array'}, {key: 'inventory', value: 2}, {key: 'tokens', value: '0', type: 'array'}, {key: 'prices', value: '200', type: 'array'}]">
        </trip-debugger>
        <trip-debugger 
            title="updateInventories"
            className="roomNightVendor"
            functionName="updateInventories"
            :parameters="[{key: 'rpid', value: 1}, {key: 'dates', value: '20181112', type: 'array'}, {key: 'inventory', value: 20}]">
        </trip-debugger>
        <trip-debugger 
            title="updateBasePrice"
            className="roomNightVendor"
            functionName="updateBasePrice"
            :parameters="[{key: 'rpid', value: 1}, {key: 'tokens', value: '0', type: 'array'}, {key: 'prices', value: '200', type: 'array'}, {key: 'inventory', value: 20}]">
        </trip-debugger>
        <trip-debugger 
            title="createRatePlan"
            className="roomNightVendor"
            functionName="createRatePlan"
            :parameters="[{key: 'name', value: 'trip room'}, {key: 'ipfs', value: 'Qmaj8UWNjTzBMBHkkaqSiyax2nFgiwYP2ewxnhGBucn6S8'}]">
        </trip-debugger>
        <trip-debugger 
            title="removeRatePlan"
            className="roomNightVendor"
            functionName="removeRatePlan"
            :parameters="[{key: 'rpid', value: ''}]">
        </trip-debugger>
        <trip-debugger 
            title="modifyRatePlan"
            className="roomNightVendor"
            functionName="modifyRatePlan"
            :parameters="[{key: 'rpid', value: 1}, {key: 'name', value: 'trip room2'}, {key: 'ipfs', value: 'Qmaj8UWNjTzBMBHkkaqSiyax2nFgiwYP2ewxnhGBucn6S8'}]">
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