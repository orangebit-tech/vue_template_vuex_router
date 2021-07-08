<template>
    <div class="display-block">
        <GmapMap
        :center="{lat:10, lng:10}"
        :zoom="7"
        map-type-id="terrain"
        style="width: 960px; height: 760px; margin-left: auto; margin-right: auto"
        >
        <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center=m.position"
        />
        </GmapMap>
    </div>
</template>

<script>
export default {
    name: 'Map'
}
</script>