<template>
    <div class="page-container md-layout-column">
        <md-app>
            <md-app-toolbar class="md-primary">
                <md-button class="md-icon-button"
                    @click="toggleMenu()">
                    <md-icon>menu</md-icon>
                </md-button>
                <h3 class="md-title" style="flex: 1">Tripio.js Debugger</h3>
                <md-button class="md-icon-button">
                    <md-icon>more_vert</md-icon>
                </md-button>
            </md-app-toolbar>

            <md-app-drawer md-permanent="clipped" 
                :md-active.sync="menuVisible">
                <md-toolbar class="md-transparent" 
                    md-elevation="0">
                    <span>Menu</span>
                </md-toolbar>

                <md-list>
                    <md-list-item>
                        <span class="md-list-item-text">RoomNightAdmin</span>
                    </md-list-item>

                    <md-list-item>
                        <span class="md-list-item-text">RoomNightCustomer</span>
                    </md-list-item>

                    <md-list-item>
                        <span class="md-list-item-text">RoomNightVendor</span>
                    </md-list-item>
                </md-list>
            </md-app-drawer>

            <md-app-content>
                <nuxt/>
            </md-app-content>
        </md-app>
    </div>
</template>

<script>
    export default {
        name: 'Reveal',
        data: () => ({
            menuVisible: false
        }),
        mounted() {

        },
        methods: {
            toggleMenu () {
                this.menuVisible = !this.menuVisible
            }
        },

    }
</script>

<style lang="scss">
    .md-app {
        //height: 400px;
        // min-height: 100%;
        // height: auto!important;
    }
    .md-app-content{
        padding: 16px;
    }
    .md-drawer {
        width: 230px;
        max-width: calc(100vw - 125px);
    }
</style>