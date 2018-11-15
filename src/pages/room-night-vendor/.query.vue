<template>
    <div>
        <trip-debugger 
            title="inventoriesOfDate"
            className="roomNightVendor"
            functionName="inventoriesOfDate"
            :parameters="[{key: 'vendorId', value: 2}, {key: 'rpid', value: 1}, {key: 'dates', value: '20180610,20180611', type: 'array'}]">
        </trip-debugger>
        <trip-debugger title="pricesOfDate"
            className="roomNightVendor"
            functionName="pricesOfDate"
            :parameters="[{ key: 'vendorId', value: 2}, {key: 'rpid', value: 1}, {key: 'dates', value: '20180610,20180611', type: 'array'}, {key: 'token', value: 1}]">
        </trip-debugger>
        <trip-debugger title="priceOfDate"
            className="roomNightVendor"
            functionName="priceOfDate"
            :parameters="[{ key: 'vendorId', value: 2}, {key: 'rpid', value: 1}, {key: 'date', value: '20180610', type: 'array'}, {key: 'token', value: 1}]">
        </trip-debugger>
        <trip-debugger title="ratePlansOfVendor"
            className="roomNightVendor"
            functionName="ratePlansOfVendor"
            :parameters="[{ key: 'vendorId', value: 2}, { key: 'offset', value: 0}, {key: 'limit', value: 10}]">
        </trip-debugger>
        <trip-debugger title="ratePlanOfVendor"
            className="roomNightVendor"
            functionName="ratePlanOfVendor"
            :parameters="[{ key: 'vendorId', value: 2}, {key: 'rpid', value: 1}]">
        </trip-debugger>
        <trip-debugger title="pricesAndInventoriesOfDate"
            className="roomNightVendor"
            functionName="pricesAndInventoriesOfDate"
            :parameters="[{ key: 'vendorId', value: 2}, {key: 'rpid', value: 1}, {key: 'dates', value: '20180610,20180611', type: 'array'}, {key: 'token', value: 1}]">
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