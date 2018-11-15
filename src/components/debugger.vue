<template>
    <div class="debugger">
        <div class="debugger-title">
            {{ title }}
        </div>
        <div class="md-layout">
            <div class="md-layout-item">
                <md-field v-for="(item, index) in parameters"
                    :key="index">
                    <label>{{ item.key }}</label>
                    <md-input v-model="item.value"></md-input>
                </md-field>
                <md-button class="md-raised md-primary"
                    @click="callTripio()">Run</md-button>
            </div>
            <div class="md-layout-item md-small-hide" 
                style="padding: 10px;">
                <div class="debugger-console">
                    <div class="console-title">
                        Console
                    </div>
                    <div class="console-content">
                        {{ console }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['title', 'className', 'functionName', 'parameters'],
        data(){
            return {
                console: 'Hello Tripio',
                account: null
            };
        },
        created() { },
        mounted() { 
            web3.eth.getAccounts((error, accounts)=> {
                if (!error) {
                    this.account = accounts[0]
                }
            });
        },
        methods: {
            callTripio() {
                let args = this.getArguments(this.parameters);
                this.console = 'loading...';
                this.$tripio[this.className][this.functionName](...args, {
                    from: this.account
                }).then(res => {
                    this.console = res;
                });
            },
            getArguments(parameters) {
                let args = [];

                parameters.forEach((val, index) => {
                    if(val.type == 'array') {
                        args.push(val.value.split(','));
                    }
                    else {
                        args.push(val.value);
                    }
                });

                return args;
            },

        }
    }
</script>
<style lang="scss">
    .debugger {
        padding-bottom: 10px;
        border-bottom: 1px solid #ccc;
        margin-bottom: 20px;
        overflow-y: auto;
        .debugger-title {
            font-size: 16px;
            line-height: 20px;
            padding: 10px 0 5px 0;
            font-weight: bold;
        }
        .debugger-console {
            height: 100%;
            color: rgb(213, 213, 213);
            background-color: rgb(25, 28, 29);
            .console-title {
                padding: 5px;
                background-color: #000;
                font-weight: bold;
            }
            .console-content {
                padding: 5px;
                word-break: break-all;
            }
        }
    }
</style>