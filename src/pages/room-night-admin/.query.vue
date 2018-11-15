<template>
    <div>
        <trip-debugger 
            title="getVendorIds"
            className="roomNightAdmin"
            functionName="getVendorIds"
            :parameters="[{key: 'offset', value: 0}, {key: 'limit', value: 100}]">
        </trip-debugger>
        <trip-debugger title="getVendor"
            className="roomNightAdmin"
            functionName="getVendor"
            :parameters="[{ key: 'vendorId', value: 1}]">
        </trip-debugger>
        <trip-debugger title="getVendorByAddress"
            className="roomNightAdmin"
            functionName="getVendorByAddress"
            :parameters="[{ key: 'address', value: '0x262bab6a90aa1741390c4a3ec58855c81d9728e1'}]">
        </trip-debugger>
        <trip-debugger title="supportedTokens"
            className="roomNightAdmin"
            functionName="supportedTokens"
            :parameters="[{ key: 'offset', value: 0}, {key: 'limit', value: 10}]">
        </trip-debugger>
        <trip-debugger title="getToken"
            className="roomNightAdmin"
            functionName="getToken"
            :parameters="[{ key: 'tokenId', value: 1}]">
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