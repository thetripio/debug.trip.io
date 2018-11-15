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
        <trip-debugger 
            title="balanceOf"
            className="roomNightCustomer"
            functionName="balanceOf"
            :parameters="[{key: 'owner', value: '0x262bab6a90aa1741390c4a3ec58855c81d9728e1'}]">
        </trip-debugger>
        <trip-debugger 
            title="ownerOf"
            className="roomNightCustomer"
            functionName="ownerOf"
            :parameters="[{key: 'tokenId', value: 1}]">
        </trip-debugger>
        <trip-debugger 
            title="getApproved"
            className="roomNightCustomer"
            functionName="getApproved"
            :parameters="[{key: 'tokenId', value: 1}]">
        </trip-debugger>
        <trip-debugger 
            title="isApprovedForAll"
            className="roomNightCustomer"
            functionName="isApprovedForAll"
            :parameters="[{key: 'owner', value: '0x262bab6a90aa1741390c4a3ec58855c81d9728e1'}, {key: 'operator', value: '0x262bab6a90aa1741390c4a3ec58855c81d9728e1'}]">
        </trip-debugger>
        <trip-debugger 
            title="isRefundApplied"
            className="roomNightCustomer"
            functionName="isRefundApplied"
            :parameters="[{key: 'rnid', value: '1'}]">
        </trip-debugger>
        <trip-debugger 
            title="roomNight"
            className="roomNightCustomer"
            functionName="roomNight"
            :parameters="[{key: 'rnid', value: '1'}]">
        </trip-debugger>
        <trip-debugger 
            title="roomNightsOfOwner"
            className="roomNightCustomer"
            functionName="roomNightsOfOwner"
            :parameters="[{key: 'from', value: 0}, {key: 'limit', value: 10}, {key: 'isVendor', value: 'false', type: 'boolean'}]">
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