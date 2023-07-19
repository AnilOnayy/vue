<template>
    <app-header />
    
    <div class="container">
        <h3>Lorem, ipsum dolor.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatibus alias quas aliquid dicta sapiente beatae officiis esse reprehenderit magni?</p>
    </div>

    <!-- <CounterItem /> -->
    <counter-item />

</template>


<script>
    import CounterItem from '@/components/CounterItem.vue';
    
    export default {
        components : {
            CounterItem ,
            // "benim-guzel-sayacim" : CounterItem
        } 
    };
</script>