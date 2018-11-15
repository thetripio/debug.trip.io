<template>
    <div>
        <trip-debugger 
            title="safeTransferFrom"
            className="roomNightCustomer"
            functionName="safeTransferFrom"
            :parameters="[{key: 'from', value: 0}, {key: 'to', value: 10}, {key: 'tokenId', value: 1}, {key: 'data', value: ''}]">
        </trip-debugger>
        <trip-debugger 
            title="transferFrom"
            className="roomNightCustomer"
            functionName="transferFrom"
            :parameters="[{key: 'from', value: 0}, {key: 'to', value: 10}, {key: 'tokenId', value: 1}]">
        </trip-debugger>
        <trip-debugger 
            title="transferFromInBatch"
            className="roomNightCustomer"
            functionName="transferFromInBatch"
            :parameters="[{key: 'from', value: 0}, {key: 'to', value: 10}, {key: 'tokenIds', value: '1', type: 'array'}]">
        </trip-debugger>
        <trip-debugger 
            title="approve"
            className="roomNightCustomer"
            functionName="approve"
            :parameters="[{key: 'approved', value: ''}, {key: 'tokenId', value: 1}]">
        </trip-debugger>
        <trip-debugger 
            title="setApprovalForAll"
            className="roomNightCustomer"
            functionName="setApprovalForAll"
            :parameters="[{key: 'operator', value: ''}, {key: 'approved', value: 'true', type: 'boolean'}]">
        </trip-debugger>
        <trip-debugger 
            title="buyInBatch"
            className="roomNightCustomer"
            functionName="buyInBatch"
            :parameters="[{key: 'vendorId', value: '2'}, {key: 'rpid', value: 2}, {key: 'dates', value: '', type: 'array'}, {key: 'token', value: 2}]">
        </trip-debugger>
        <trip-debugger 
            title="applyRefund"
            className="roomNightCustomer"
            functionName="applyRefund"
            :parameters="[{key: 'rnid', value: '2'}, {key: 'isRefund', value: 'true', type: 'boolean'}]">
        </trip-debugger>
        <trip-debugger 
            title="refund"
            className="roomNightCustomer"
            functionName="refund"
            :parameters="[{key: 'rnid', value: '2'}]">
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