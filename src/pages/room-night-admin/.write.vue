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
        <trip-debugger 
            title="removeVendorByAddress"
            className="roomNightAdmin"
            functionName="removeVendorByAddress"
            :parameters="[{key: 'address', value: '0x49F405e17aea89AA9CA060c62c81ac7CFB45e77a'}]">
        </trip-debugger>
        <trip-debugger 
            title="removeVendorById"
            className="roomNightAdmin"
            functionName="removeVendorById"
            :parameters="[{key: 'vendorId', value: '3'}]">
        </trip-debugger>
        <trip-debugger 
            title="makeVendorValid"
            className="roomNightAdmin"
            functionName="makeVendorValid"
            :parameters="[{key: 'vendorId', value: '3'}, {key: 'valid', value: true}]">
        </trip-debugger>
        <trip-debugger 
            title="addToken"
            className="roomNightAdmin"
            functionName="addToken"
            :parameters="[{key: 'address', value: ''}]">
        </trip-debugger>
        <trip-debugger 
            title="removeToken"
            className="roomNightAdmin"
            functionName="removeToken"
            :parameters="[{key: 'tokenId', value: '3'}]">
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